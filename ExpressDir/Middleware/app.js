const express = require('express');
const app = express();
const path = require('path');
const ExpressError = require('./ExpressError');
const port=8080;

/*Middleware=>It is an intermediary and in Express is function that come into play after server receives the request and
before response sent to the client.
Middleware function has access to request and response objects and the next middleware function in the stack.
Middleware can: 
//execute any code
//Modify or make changes to request and response objects
//End the request-response cycle when response is sent to the client
//Call the next middleware function in the stack. */

/*next()=>The next middleware function is commonly denoted by a variable named next. 
if the current middleware function does not end the request-response cycle, 
it must call next() to pass control to the next middleware function.*/

/*app.use()=>This function add new middleware to the application req-response cycle and It run middleware for every http request 
or for specified path.*/
// app.use((req,res,next)=>{
//     console.log("Middleware 1");
//     next();
// })

//Creating Utility Middleware they act like logger(logger are function that log the useful info about the request and response objects )
// app.use((req,res,next)=>{
//     req.resTime=new Date(Date.now()).toLocaleTimeString();
//     console.log(req.method,req.url,req.resTime);
// })

// app.get("/random",(req,res,next)=>{
//     res.send("Random GET Middleware");
// })
// app.use("/random",(req,res,next)=>{
//     res.send("Random USE Middleware");
// })
// let's create a middleware for an api that checks if the access token was  passed in query string or not 
// app.use("/api",(req,res,next)=>{
//     let {access_token}=req.query;
//     if(access_token==="12345"){
//         next();
//     }else{
//         res.status(401).send("Unauthorized Access");
//     }
// })
// app.get("/api",(req,res,next)=>{
//     res.send("Data");
// })
//passing multiple middleware
// const middleware1=(req,res,next)=>{
//     let {access_token}=req.query;
//     if(access_token==="12345"){
//         next();
//     }else{
//         res.status(401).send("Unauthorized Access");
//     }
// }
// const middleware2=(req,res,next)=>{
//     res.send("passing multiplemiddleware");
// }
// app.get("/api2",middleware1,middleware2)

/*Error Handling=>Error handling refers how an express catches and processes errors that occur both synchronously and asynchronously in the application.
If synchronous code throw an error then express will cathch and process it. and
*/
/*Default Error Handling=>Express come with built in error handler that takes care of any errors that might be encountered in the application. 
This middleware function is added at the end of the middleware stack.*/
app.get("/error",(req,res,next)=>{
    let {password}=req.query;
    if(password==="21eebcs069"){
        res.send("Access granted");
    } else{
        throw new ExpressError("Access Denied",401);
    }
})
//Define error handler middleware function same as other middleware function except it has four arguments instead of three.
app.get("/err",(req,res,next)=>{
    abcd=abcd;
})
app.use((err,req,res,next)=>{
    console.log("------Error-----");
    console.log(err)
    res.send(err);
})
//create admin route and send error with a 403 status code
app.get("/admin",(req,res,next)=>{
    throw new ExpressError("You are not an admin",403);
})
app.use((err,req,res,next)=>{
    let{statusCode=500,message="Something went wrong"}=err;
    res.status(statusCode).send(message);
})
app.listen(port,(req,res)=>{
    console.log("server is running on port 8080");
})