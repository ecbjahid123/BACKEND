const express = require('express');
const app=express();
const path=require('path');
const port=8080;
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});
/*app.set=>used to assign a value to an application setting,Here (view engine) is built in application setting that assign ejs*/
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));//to set the path of views folder
app.get("/",(req,res)=>{
    res.render("home.ejs");//to render the home.ejs file when the root route is accessed
})
//passing data to ejs file using render method
app.get("/rolldice",(req,res)=>{
    const diceValue = Math.ceil(Math.random() * 6);//to generate a random number between 1 and 6
    res.render("rolldice.ejs",{diceValue});//to render the rolldice.ejs file and pass the diceValue to it
})
app.get("/ig/:username",(req,res)=>{
    const{username}=req.params;//to get the username from the url
    const followers=["Sammer","Sahil","Rohit","Ankit","Rahul"];//to create an array of followers
    res.render("ig.ejs",{username,followers});//to render the instagram.ejs file and pass the username to it
});
app.get("/instagram/:username",(req,res)=>{
    const {username}=req.params;//to get the username from the url
    const instaData=require("./data.json");//to require the data.json file
    const userData=instaData[username];//to get the userData from the instaData using the username as key
    if(userData){
    res.render("instagram.ejs",{userData});//to render the instagram.ejs file and pass the userData to it
    }
    else{
        res.render("error.ejs");
    }
});
/*Serve Static Files: To serve static files like CSS,js images, etc., we can use the express.static middleware.*/
app.use(express.static(path.join(__dirname,"/public/css")));//to serve the static files from the public/css folder
app.use(express.static(path.join(__dirname,"/public/js")));//to serve the static files from the public/js folder