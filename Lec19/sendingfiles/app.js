const express = require('express');

const app = express();


const PORT = 4444;


app.get('/', (req,res)=>{
    res.sendFile('C:\\Users\\1234\\Desktop\\RGI web 18may\\Lec19\\sendingfiles\\index.html') // absolute path of any file 
})

app.get('/style.css', (req,res)=>{
    res.sendFile('C:\\Users\\1234\\Desktop\\RGI web 18may\\Lec19\\sendingfiles\\style.css') // absolute path of any file 
})


app.listen(PORT,()=>{
    console.log("server started succesfully ")
})