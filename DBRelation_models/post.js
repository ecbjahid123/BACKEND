const mongoose=require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/relationDemo')
  .then(() => console.log('Connected Successfully!'))
  .catch((err)=>console.log(err));

//Define Creator Schema
const creatorSchema=new mongoose.Schema({
   creatorName:String,
   email:String
});

//Handling Deletion
creatorSchema.post("findOneAndDelete",async(creator)=>{
   let res= await Post.deleteMany({creators:creator._id});
   console.log(res);
})


//Define Creator Model
const Creator=mongoose.model("Creator",creatorSchema);

//Define Post Schema
const postSchema=new mongoose.Schema({
    content:String,
    likes:Number,
    creators:[
        {
         type:mongoose.Schema.Types.ObjectId,
         ref:"Creator"
        }
    ]
});
//Define Post Model
const Post=mongoose.model("Post",postSchema);

//Example Add content
// const addData=async()=>{
//     // let creator1=new Creator({creatorName:"Shradha Khapra",email:"khapras109@gmail.com"})
//     let creator1=await Creator.findOne({_id:'6ad30af59beca8f26ffad3fc'})
//     let newPost=new Post({
//         content:"Video #102 about HTML",
//         likes:1200000,
//     })
//     newPost.creators.push(creator1);
//     // let c=await creator1.save();
//     let p=await newPost.save();      
//     console.log(p); 
// }
// addData();

//Delete Customer
let delCreator=async()=>{
    let creator=await Creator.findByIdAndDelete('6acdb6c4d220a8b141063ac8');
    console.log(creator);
}
delCreator();

// const findPostData=async()=>{
//     let res=await Post.find({}).populate("creators");
//     console.log(...res);
// }
// findPostData();