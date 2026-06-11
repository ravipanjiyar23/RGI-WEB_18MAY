const express = require('express')
const app = express();

const PORT = 4444


app.get('/' , function(req,res){
    res.send("hello world");
})

app.get('/about' , function(req,res){
    res.send("hello about page");
})

app.get('/hello' , function(req,res){
    res.send("hello ");
})


app.listen(PORT,()=>{
    console.log("server started");
})