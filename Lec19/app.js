const express = require('express');

const app = express();


const PORT = 4444;


app.get('/', (req,res)=>{
    res.send('hello students')
})


// Query 
app.get('/great' , (req,res)=>{
    console.log(req.query.lastname);

    const name = req.query.lastname;

    res.send(`hello ${name} student `)
})


//Params
// URL http://localhost:4444/great/


app.get('/great/:name',(req,res)=>{
    const name  = req.params.name;

    res.send(`Welcome to app via param route, ${name}`)
})


app.listen(PORT,()=>{
    console.log('server strated');
})