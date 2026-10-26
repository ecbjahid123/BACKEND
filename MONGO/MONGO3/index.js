const express=require("express");
const mongoose=require("mongoose");
const path=require("path");
const Chat=require("./models/chats.js");
const methodOverride=require("method-override");
const ExpressError=require("./ExpressError.js");
const app=express();
const port=8080; 

app.set("views",path.join(__dirname,"/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));



async function main() {
await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main()
.then((res)=>console.log("Connected to MongoDB"))
.catch((err)=>console.log(err));


//Async Wrapper function to handle errors in async functions
function asyncWrapper(fn){
  return function(req,res,next){
    fn(req,res,next).catch((err)=>next(err));
  }
}

//Index route
app.get("/chats", asyncWrapper(async (req,res,next)=>{
  let chats=await Chat.find();
  res.render("index.ejs",{chats});
}));

//render a form to create new chat
app.get("/chats/new",(req,res,next)=>{
  res.render("new.ejs");

});
//show chats
app.get("/chats/:id",async (req,res,next)=>{
  try{
  let {id}=req.params;
  let chat=await Chat.findById(id);
  if(!chat){
     next(new ExpressError("Chat not found",404));
  }
  res.render("show.ejs",{chat});
  console.log(chat);
  }catch(err){
    next(err);
  }
});


//create a new chat
app.post("/chats",(req,res,next)=>{
  let {from,to,message}=req.body;
  //here we don't need use await function because we are not using the result of the save() function, 
  // we just want to save the chat and redirect to the index page, so we can use 
  // .then() and .catch() to handle the promise returned by save() function.
  let newChat=  new Chat({from,to,message}).save()
  .then((res)=>console.log(res))
  .catch((err)=>{
        next(err);
     });
  res.redirect("/chats");
});

//render a form to update a chat
app.get("/chats/:id/update",async (req,res,next)=>{
  try{
  let {id}=req.params;
  let chat=await Chat.findById(id);
  res.render("update.ejs",{chat});
  console.log(chat);
  }catch(err){
    next(err);
  }
});
//update a chat
app.put("/chats/:id", async (req,res,next)=>{
  try{
  let {id}=req.params;
  let{message:newMessage}=req.body;
  let updatedDate=Date.now();
  await Chat.findByIdAndUpdate(id,{message:newMessage},{runValidators:true,new:true},{date:updatedDate})
  .then((res)=>console.log(res))
  .catch((err)=>console.log(err));
  res.redirect("/chats");
  }catch(err){
    next(err);
  }
})
//Delete an chat
app.delete("/chats/:id",async (req,res,next)=>{
  try{
  let {id}=req.params;
  let deleteChat=await Chat.findByIdAndDelete(id,{runValidators:true,new:true})
  .then((res)=>console.log(res))
  .catch((err)=>console.log(err));
  res.redirect("/chats");
  }catch(err){
    next(err);
  }
})
//CastError handler
function CastErrorHandler(err){
  console.log("you face CastError");
  console.dir(err.message);
  return err;
}
//ValidationError handler
function ValidationErrorHandler(err){
  console.log("you face ValidationError");
  console.dir(err.message);
  return err;
}
app.use((err,req,res,next)=>{
  console.log(err.name);
  if(err.name==="CastError"){
    err=CastErrorHandler(err);
  } else if(err.name==="ValidationError"){
    err=ValidationErrorHandler(err);
  }
  next(err);
});
app.use((err,req,res,next)=>{
    let {message="Something went wrong",statusCode=500}=err;
    res.status(statusCode).send(message);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});