const mongoose = require("mongoose");

main()
.then((res)=>console.log("Connected to MongoDB"))
.catch((err)=>console.log(err));   

async function main() {
await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
//schema validation=>here we set rules for schema
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:100,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"Price is too low"],
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["Fiction","Non-Fiction"],
    },
    genre:[String],
});

const Book=mongoose.model("Book",bookSchema);

//Inserting One a document
// let book1=new  Book({title:"The Psychology of Money",author:"Morgan Housel",price:500});
// book1.save()
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));
// let book2=new  Book({title:"Atomic Habits",author:"James Clear",price:400},{discount:50,category:"Non-Fiction"});
// book2.save()
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));
// let book3=new  Book({title:"The Alchemist",author:"Paulo Coelho",price:302,discount:30,genre:["Adventure","Fiction"]});
// book3.save()
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//update document
Book.findByIdAndUpdate("6a02d4c845d0e02e40e2b762",{price:-10},{runValidators:true},{new:true})
.then((res)=>console.log(res))
.catch((err)=>console.log(err.errors.price.message));