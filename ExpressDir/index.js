const express=require("express");
//express is funtion and app is object
const app=express();//create express application and express() is top level function that is exported by the express module. 

// /*port=>port are the logical endpoint of network connection that is used to exchange infomation about web server & web client.*/ 
let port=8080;
//start the server and listen on the specified port
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
//app.use=>This function add new Middleware to the app(application) and Middleware is a function that has access to the request object(req), response object(res) and the next middleware function in the application’s request-response cycle.
// app.use((req,res)=>{
//     console.log("Request received");
    
// })
/*res.send=>send the HTTP response and The body parameter can be Buffer object,a string, an object, or an array.*/
// app.use((req,res)=>{
//     console.log("Request received");
//     res.send(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Card Hover Effect</title>
//     <link rel="stylesheet" href="cardhover.css">
// </head>
// <body>
//    <div class="container">
//     <div class="card">
//         <img class="woman" src="https://www.mypunepulse.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-27-at-2.11.07-PM-1024x683.jpeg" alt="Shardha khapra">
//         <div class="desc">
//         <h3 style="color: rgba(237, 7, 7, 0.5);">Sharadha Khapra</h3>
//         <br>
//         <p><b>Software Engineer</b></p>
//         <br>
//         <p><b>Work in <a href="https://www.bing.com/ck/a?!&&p=3d5a52c2f59dcc02e5876e95808e1b1d52dda9e5285a2940f815753eab75078eJmltdHM9MTc2NDcyMDAwMA&ptn=3&ver=2&hsh=4&fclid=3e19d1b9-b92a-6936-23d2-c728b8276837&psq=microsoft&u=a1aHR0cHM6Ly9hY2NvdW50Lm1pY3Jvc29mdC5jb20vYWNjb3VudA">Microsoft</a></b></p>
//         </div>
//     </div>
//     <div class="card">
//         <img class="man" src="https://uprisehigh.com/wp-content/uploads/2021/05/Aman-Dhattarwal-Biography-Featured.jpg" alt="Aman Dhatarwal">
//         <div class="desc">
//         <h3 style="color: rgba(238, 238, 8,0.5);">Aman Dhatarwal</h3>
//         <br>
//         <p><b> Motivatoinal <span style="color: red;">Youtuber</span></b></p>
//         <br>
//         <p>Channel is <a href="https://www.youtube.com/@AmanDhattarwal">Aman Dhatrawal</a></p>    
//         </div>
//     </div> 
//     </div>    
// </body>
// </html>`);//when the parameter is a string then method set the Content_type header to text/html and send the string as the response body.
// });
// /*Routing=>Routing define how an application responds to a client request to a specific endpoints(URIs) using different  HTTP methods(GET,POST,PUT,DELETE)*/
// //respond to a GET request  on the root route
// app.get("/",(req,res)=>{
//     res.send('respond to get requeat to Home page')
// });

//Route Parameter=>It is a named URL segment that capture value at specific position in the URL and They are specified in the path with colon : prefix;
// app.get("/:username/:id",(req,res)=>{
//     let {username,id}=req.params;
//     res.send(`<h1>Welcome to the home page of ${username}</h1> 
//         <p>Instagram ID is @${username+id}</p>`);
//     console.log(req.params);
// });
//

//Query Parameter=>It is key value pair that appear after ? in the URL and separate multiple query parameter with & and they are automatically parsed by express and available in req.query object.
    app.get("/search",(req,res)=>{
        let {q}=req.query;
        if(!q){
            res.send("Please provide a search query");
        }
        res.send(`You searched for ${q}`);
    });
// Respond to GET request on the /about route
// app.get('/about', (req, res) => {
//   res.send('About page');
// });
// //respond to POST request on the root route
// app.post("/",(req,res)=>{
//     res.send(`POST request to the home page`);
// })
// // Catch all other routes
// app.all("*", (req, res) => {
//   res.status(404).send('404 - Page not found');
// });

