let express = require('express');
let app = express();

///////////////////////////////////////////////////////
// using static port give the port number in the application and using express routers
// let port = 6700;
// //default
// app.get('/',(req,res)=>{
// res.send("this is express js server")
// })
// app.get('/test',(req,res)=>{
// res.send("this is express js server")
// })
// app.listen (port,(err)=>{
//     if(err) throw err;
//     else {
//     console.log("server is runing on 6700 port")
//     }
// });
////////////////////////////////////////////

// using .env variables and configuring the port 
let dotenv = require ('dotenv');