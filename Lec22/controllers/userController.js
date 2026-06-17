const usersSchema = require('../models/userModel')

//get 


async function getAllUsers(req,res){
    const users = await usersSchema.find();

    res.status(200).json(users);
}


//get by id 

async function getuserbyID(req,res){
    const user = await usersSchema.findById(req.params.id);

    res.status(200).json(user);
}


//post 

async function createUser(req,res){

    if(!req.body.name || !req.body.age) res.status(404).json("required fields are neccesary");

    const user = usersSchema.create({
        name: req.body.name,
        age: req.body.age,
        mobile_no: req.body.mobile_no,
        rollno :  req.body.rollno
    });

    res.status(201).json(user);
}


//patch


//delete



module.exports = {getAllUsers, getuserbyID, createUser};