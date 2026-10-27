const mongoose=require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/relationDemo')
  .then(() => console.log('Connected Successfully!'))
  .catch((err)=>console.log(err));


//Define Order Schema
const orderSchema=new mongoose.Schema({
   item:String,
   price:Number,
});

//Define Order Model
const Order=mongoose.model("Order",orderSchema);

//example of Order
// const addOrder=async()=>{
//     let ord= await Order.insertMany([
//         {item:"Chips",price:10},
//         {item:"Chocolate",price:20},
//         {item:"Icecream",price:40}
//      ])
//     console.log(ord);
// }

// addOrder();




//Define Customer Schema
const customerSchema=new mongoose.Schema({
   name:String,
   orders:[
    {
         type:mongoose.Schema.Types.ObjectId,
         ref:"Order"
    }    
   ]
})


//Handeling Deletion using mongoose middleware
// pre=>run before the query is executed
// post=>run after the query is executed
// customerSchema.post("findOneAndDelete",async(customer)=>{
//    if(customer.orders.length){
//     let res=  await Order.deleteMany({ _id:{$in:customer.orders}});
//     console.log(res);
//    }
// })


 //Define Customer Model
const Customer=mongoose.model("Customer",customerSchema);


//Example of Add Customer
let addCustomer=async()=>{
    let cust=new Customer({name:"Rihan"})

    const newOrder=new Order({item:"Mawa Chai",price:20})
    cust.orders.push(newOrder);
    let ord=await newOrder.save();
    let res=await cust.save();
    console.log("add new Customer")
    console.log(res);
    console.log(ord);
}
addCustomer();


// Delete Customer and Order
// let delCust=async()=>{
//    let customer=await Customer.findByIdAndDelete('6ad308487edab1a6833f6ecb');
//    console.log(`-----CustomerDelete------${customer.name}`)
//    console.log(customer);
// }
// delCust();


//Find date in Customer
// let findCustomer=async()=>{
//     let res=await Customer.find({}).populate("orders");
//    console.log(res[0]);
// }
// findCustomer();

