require('dotenv').config()


const express=require('express')
const app=express()
const mongoose=require('mongoose')

const mainRouter=require('./routes')
const morgan=require('morgan')




const PORT = 5000;
app.listen(PORT,()=>{
    console.log("Connected to port: " + PORT);
})

app.use(morgan('tiny'))
app.use(express.json())
app.use('/',mainRouter)


mongoose
.connect('mongodb+srv://sulogna2001:HM7KlvIJeL2cgRVg@cluster0.21034.mongodb.net/subhro?retryWrites=true&w=majority' 
,{ useNewUrlParser: true})
.then(()=>{
    console.log('Database Connected')
})
.catch((error)=>{
    console.error(error)
})
;




