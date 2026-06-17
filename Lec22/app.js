const express = require("express")

const connectDB = require('./connection');

const app = express();

const userRoutes = require('./routes/userRoutes.js')

const PORT = 8001


connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users',userRoutes);


app.listen(PORT, ()=>{
    console.log('server started');
})