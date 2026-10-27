const mongoose=require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/relationDemo')
  .then(() => console.log('Connected Successfully!'))
  .catch((err)=>console.log(err));

  //Define Schema
const userSchema=new mongoose.Schema(
    {
        username:String,
        addresses:[
                {
                    _id:false,
                    location:String,
                    city:String
                }
            ]
    }
)

//Define Model
const User=new mongoose.model("User",userSchema);

//Insert data
const addUsers=async()=>{
    let user1=new User({username:"Mohd",addresses:[{location:"Sector 3",city:"Bikaner"}]});
    user1.addresses.push({location:"Ward 30",city:"Sadulpur"});
    let result= await user1.save();
    console.log(result);
}

addUsers();



