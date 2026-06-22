const express = require('express');
const connectDB = require('./connection');
const authRoute = require('./routes/authroutes')
const app  = express();


//middlewares

app.use(express.json());

app.use(express.urlencoded({ extended: true }));



app.use('/', authRoute )

connectDB();





app.listen(7001, ()=>{
    console.log('server started ');
})