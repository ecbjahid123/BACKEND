const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const {v4:uuid}=require("uuid");
const methodOverride=require("method-override");
app.use(methodOverride("_method"));//to override the method of the form submission

app.use(express.urlencoded({extended:true}));//to parse the urlencoded data from the request body
app.use(express.static(path.join(__dirname,"public")));//to serve the static files from the public folder
app.set("view engine","ejs");//to set the view engine to ejs
app.set("views",path.join(__dirname,"views"));//to set the path of views folder
let posts=[
    {
        id:uuid(),
        username:"Mohd Jahid",
        content:"Love coding"
    },
    {
        id:uuid(),
        username:"Mohd Sahil",
        content:"Love constructing"
    },
    {
        id:uuid(),
        username:"Mohd Sameer",
        content:"Love Pharma"
    }
]
//to get data for all posts
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});//to render the index.ejs file and pass the posts array to it
})
//to create a new post
app.get("/posts/new",(req,res   )=>{
    res.render("new.ejs");
});
//to handle the form submission and create a new post
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;//to get the username and content from the request body
    const id=uuid();//to generate a unique id for the new post
    posts.push({id,username,content});//to add the new post to the posts array
    res.redirect("/posts");//to redirect the user to the /posts route to see the updated list of posts
});
//to get data for a single post
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;//to get the id from the request parameters
    let post=posts.find((post)=>id===post.id);//to find the post with the given id
    res.render("show.ejs",{post});//to render the show.ejs file and pass the post object to it
});
//to get data for editing a post
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;//to get the id from the request parameters
    let post=posts.find((post)=>id===post.id);//to find the post with the given id    
    res.render("edit.ejs",{post});
});
//get post data for editing
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;//to get the id from the request parameters
    let newContent=req.body.content;//to get the new content from the request body
    let post=posts.find((post)=>id===post.id);//to find the post with the given id
    post.content=newContent;//to update the content of the post
    res.redirect("/posts");//to redirect the user to the /posts route to see the updated list of posts
});

//1st method to delete a post
//to get data for deleting a post
// app.get("/posts/:id/delete",(req,res)=>{
//     let {id}=req.params;//to get the id from the request parameters
//     let post=posts.find((post)=>id===post.id);//to find the post with the given id
//     res.render("delete.ejs",{post});
// });
//to handle the form submission and delete a post
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;//to get the id from the request parameters
    posts=posts.filter((post)=>id!==post.id);//to remove the post with the given id from the posts array
    res.redirect("/posts");//to redirect the user to the /posts route to see the updated list of posts
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});