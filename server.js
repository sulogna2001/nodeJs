require('dotenv').config()


const express=require('express')
const app=express()
const mongoose=require('mongoose')
const fs = require("fs");

var data=[];
const jsonString = fs.readFileSync("./data.json");
data= JSON.parse(jsonString)


// fs.readFile("./data.json", "utf8", (err, jsonString) => {
//   if (err) {
//     console.log("File read failed:", err);
//     return;
//   }
   
// });

// mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true})
mongoose.connect('mongodb://localhost:27017/employees' ,{ useNewUrlParser: true});
const db=mongoose.connection

db.on('error',(error)=>{
    console.error(error)
})

db.once('open',()=>{
    console.log('Connected to database')
})

app.use(express.json())

const employessRouter=require('./routes/employees')
app.use('/employees',employessRouter)

app.listen(3000,()=>{
    // console.log('Server started')


    console.log(data[0].name);
})