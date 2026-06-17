const mongoose = require('mongoose')

async function connectDB(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/students")

        console.log("databse connected succesfully")
    }
    catch(err){
        console.log(err);
    }
}


module.exports = connectDB;