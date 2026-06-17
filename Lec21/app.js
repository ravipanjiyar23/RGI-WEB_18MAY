const express = require('express');
const fs  = require('fs')


const userRouter = require('./routes/user')

// const users = require('./MOCK_DATA.json') // users is arrays of object

const app = express();

const PORT = 8000;



//middlewares 

app.use(express.urlencoded({extended:true}));


app.use('/api/users', userRouter);



// to get all the data 
// app.get('/api/users',(req,res)=>{
//     return res.json(users)
// })




// // to get  the data of particular user 

// app.get('/api/users/:id',(req,res)=>{
//     const id = Number(req.params.id);

//     console.log(typeof(id));

//     const user = users.filter((x)=> x.id===id);

//     console.log(user);


//     return res.json(user);


// })



// // to create or add the data in the file -- post

// app.post('/api/users',(req,res)=>{

//     const body = req.body; // it is holding the data coming form user or client 

//     console.log(body);

//     users.push({id:users.length+1 ,...body});

//     fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
//         return res.json({status: " successs"});
//     })


// })



// // to update the data  -- patch

// app.patch('/api/users/:id',(req,res)=>{
//     const id = Number(req.params.id);

//     let obj = users.find((user)=> user.id===id);

//     console.log(obj);

//     obj.first_name = req.body.first_name;

//     console.log(obj);

//     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users) , (err,data)=>{
//         return res.json({status: "ok"});
//     })
    
// })


// // to delete -- delete

// app.delete('/api/users/:id' ,(req,res)=>{
//     const id = Number(req.params.id);

//     const x = users.filter((user)=> user.id!==id);

//     fs.writeFile('./MOCK_DATA.json', JSON.stringify(x), (err,data)=>{
//         return res.json({status: "deleted succesfully"});
//     })
// })



app.listen(PORT, ()=>{
    console.log('server started');
    
})