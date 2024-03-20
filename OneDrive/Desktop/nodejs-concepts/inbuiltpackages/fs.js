let fs = require("fs");
fs.writeFile('mycode.txt','This is data of my node',(err)=>{
        if(err) throw err;
       console.log('Task Done')
     })
     fs.writeFile('mycode1.txt','This is data of my node',(err)=>{
        if(err) throw err;
       console.log('Task Done')
     })