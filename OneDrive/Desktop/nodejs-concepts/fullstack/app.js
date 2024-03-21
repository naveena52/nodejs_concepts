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
dotenv.config()
let port = process.env.PORT || 6700;//here we configure the .env variable port and make it use or else the default one
//default
app.get('/',(req,res)=>{
res.send("<h1>this is express js server using .env port</h1>")
})
app.get('/test',(req,res)=>{
res.send("this is express js server using .env port")
})
app.listen (port,(err)=>{
    if(err) throw err;
    else {
    console.log(`server is runing on port ${port}`)
    }
});