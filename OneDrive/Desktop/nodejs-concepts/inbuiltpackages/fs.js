let fs = require("fs");
fs.writeFile('mycode.txt','This is data of my node',(err)=>{
        if(err) throw err;
       console.log('Task Done')
     })
     fs.writeFile('mycode1.txt','This is data of my node',(err)=>{
        if(err) throw err;
       console.log('Task Done')
     })
     fs.writeFile('mycode.txt','We are using express',(err)=>{
          if(err) throw err;
          console.log('Task Done')
      })
      
      fs.appendFile('myText.txt','Code from Node FS \n',(err) => {
          if(err) throw err;
          console.log('File appended')
      })
      let data  = fs.readFileSync('city.json',{encoding:'utf-8',flag:'r'}) // run or execute the files 
      //one after one with sync overlapping of data will be avoided
      console.log(data)
      
      let data1  = fs.readFileSync('myText.txt',{encoding:'utf-8',flag:'r'})
      console.log(data1)
      
      
      fs.unlink('mycode.txt',(err)=>{ //delete the file 
        if(err) throw err;
          console.log('file deleted')
      })
      
      fs.rename('myFile.xml','myText.txt',(err)=>{
        if(err) throw err; //renaming the files 
        console.log('file renamed')
    })
     