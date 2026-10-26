//chat will have (id,from,to,message,time)
const mongoose=require("mongoose");
const chatSchema=new mongoose.Schema({
  from:{
    type:String,
    required:true
  },
  to:{
    type:String,
    required:true
  },
  message:{
    type:String,
    maxLength:100
  },
  date:{
    type:Date,
    required:true,
    default:Date.now
  }
});

const Chat=mongoose.model("Chat",chatSchema);
//export the model
module.exports=Chat;