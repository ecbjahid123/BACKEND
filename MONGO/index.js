const mongoose = require("mongoose");

main()
.then((res)=>console.log("Connected to MongoDB"))
.catch((err)=>console.log(err));   

async function main() {
await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
//schema=>schema define the shape of the document within that collection.
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
//model=>model in mongoose is the class with which we construct documents.
const User=mongoose.model("User",userSchema);
//Inserting One a document
// const user2=new User({name:"Sahil",email:"sahilmohd@gmail.com",age:24});
// user2.save()
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//Inserting multiple documents
// User.insertMany([
//     {name:"Hafiz",email:"hafizmohd@gmail.com",age:24},
//     {name:"Sajid",email:"sajidmohd@gmail.com",age:22},
//     {name:"Sohil",email:"sohilmohd@gmail.com",age:21}
// ]).then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//Find() method is used to find all the documents in the collection that match the specified criteria. It returns an array of documents that match the query.
//Mongoose queries are not promises,but they have a .then() method 
// User.find({age:{$gt:22}})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//FindOne() method is used to find a single document in the collection that matches the specified criteria. It returns the first document that matches the query.
// User.findOne({name:"Sahil"})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));
//Note:find() method returns cursor that reference to the documents whereas findOne() method returns actual document.

//FindById() method is used to find single document by its unique identifier (_id). It returns the document that matches the specified _id.
// User.findById("6a02bb191bb67e5831586449")
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//UpdateOne() method is used to update a single document in the collection that matches the specified criteria. It updates the first document that matches the query.
// User.updateOne({name:"Sahil"},{age:25})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//UpdateMany() method is used to update multiple documents in the collection that match the specified criteria. It updates all documents that match the query.
// User.updateMany({age:{$gt:22}},{age:30})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//findOneAndUpdate() method is used to find a single document that matches the specified criteria and update it according to the update arguments.
// User.findOneAndUpdate({name:"Sahil"},{age:26},{new:true})
// .then((res)=>console.log(res)) 
// .catch((err)=>console.log(err));

//findByIdAndUpdate() method is used to find a single document by its unique identifier (_id) and update it according to the update arguments.
// User.findByIdAndUpdate("6a02153d38d1b9737305bc1d",{age:23},{new:true})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//DeleteOne() method is used to delete a single document in the collection that matches the specified criteria. It deletes the first document that matches the query.
//returns an object with the property deletedCount that indicates how many documents were deleted. 
// User.deleteOne({name:"Sajid"})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//DeleteMany() method is used to delete multiple documents in the collection that match the specified criteria. It deletes all documents that match the query.
// User.deleteMany({age:{$gt:29}})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//findOneAndDelete() method is used to find a single document that matches the specified criteria and delete it from the collection.
// User.findOneAndDelete({name:"Sohil"},{new:true})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//findByIdAndDelete() method is used to find a single document by its unique identifier (_id) and delete it from the collection.
// User.findByIdAndDelete("6a0215c0afb73ec1ad47a984",{new:true})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));