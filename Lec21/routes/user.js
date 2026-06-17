const express = require('express')
const fs = require('fs')

const router = express.Router();
const app = express();

const users = require('./MOCK_DATA.json') // users is arrays of object


// app.use(express.urlencoded({extended:false}));

router.get('/', (req,res)=>{
    return res.json(users)
})

router.get('/:id',(req,res)=>{
    const id = Number(req.params.id);

    // console.log(typeof(id));

    const user = users.find((x)=> x.id===id);

    if(!user){
        return res.status(404).json({status :'user not found'})
    }

    console.log(user);


    return res.status(200).json(user);


})


router.post('/',(req,res)=>{

    const body = req.body; // it is holding the data coming form user or client 

    console.log(body);

    users.push({id:users.length+1 ,...body});

    fs.writeFile('C:\\Users\\1234\\Desktop\\RGI web 18may\\Lec21\\routes\\MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.status(201).json({status: " successs"});
    })


})



module.exports = router;