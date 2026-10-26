const mongoose=require("mongoose");
const Chat=require("./models/chats.js");

async function main() {
await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main()
.then((res)=>console.log("Connected to MongoDB"))
.catch((err)=>console.log(err));

let allChat=[
    {
        from:"jack",
        to:"oggy",
        message:"Hi,My  small brother"
    },
    {
        from:"Bheem",
        to:"Chutki",
        message:"Hi,My friend chutki"
    },{
        from:"shahneshah",
        to:"jahid",
        message:"bhai tu kaisa hai,bahan ki shaadi main zaroor aana"
    },{
        from:"motu",
        to:"patlu",
        message:"empty stomach,I don't want get idea"
    },{
        from:"doremon",
        to:"nobita",
        message:"I send you a gadget, use it and solve your problem"
    },{
        from:"sajid mama",
        to:"jahid",
        message:"you will come tomorrow bcz we will go for buy animal"
    },,{
        from:"SRK",
        to:"Salman",
        message:"Make Karan-Arjun 2"
    }
]
Chat.insertMany(allChat)
.then((res)=>console.log(res))
.catch((err)=>console.log(err));