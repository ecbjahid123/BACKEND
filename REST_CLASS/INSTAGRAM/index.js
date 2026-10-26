const express=require("express");
const app=express();
const port=3000;
const path=require("path");
const {v4:uuid}=require("uuid");
const methodOverride=require("method-override");
app.use(methodOverride("_method"));//to override the method of the form submission

app.use(express.urlencoded({extended:true}));//to parse the urlencoded data from the request body
app.use(express.static(path.join(__dirname,"public")));//to serve the static files from the public folder
app.set("view engine","ejs");//to set the view engine to ejs
app.set("views",path.join(__dirname,"views"));//to set the path of views folder
let posts=
app.get("/instagram",(req,res)=>{
    res.render("index.ejs",{posts});
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})