require('dotenv').config()


const express=require('express')
const app=express()
const mongoose=require('mongoose')
const fs = require("fs");

const employessRouter=require('./routes/employees');

var data=[];
const jsonString = fs.readFileSync("./data.json");
data= JSON.parse(jsonString)
// module.exports = { testers: "data" };

const PORT = 1000;
app.listen(PORT,()=>{
    console.log("Connected to port: " + PORT);
})

app.use('/employees',employessRouter)
app.use(express.json())

// mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true})
// mongoose.connect('mongodb://localhost:27017/employees' ,{ useNewUrlParser: true});
// const db=mongoose.connection

// db.on('error',(error)=>{
//     console.error(error)
// })

// db.once('open',()=>{
//     console.log('Connected to database')
// })