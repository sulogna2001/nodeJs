const mongoose=require('mongoose')

const testerSchema=new mongoose.Schema({
    languages:{
        type:Array,
        required:true
    },
    device:{
        type:Array

    },
    os:{
        type:Array


    },
    credit:{
        type:Number

    },
    verified:{
        type:Boolean,
        default:false

    },
   
    name:{
        type:String,
        required:true


    },
    email:{
        type:String,
        required:true



    },
    dob:{
        type:Number,
        required:true


    },
    gender:{
        type:String


    },
    occupation:{
        type:String,
        required:true



    },
    occupationDetails:{
        type:String


    },
    annualincome:{
        type:Number


    },
    state:{
        type:String

    },
    city:{
        type:String


    },
    country:{
        type:String


    },
    testerTasks:{
        type:Array,
        required:true
       


    },
   
    createdAt:{
        type:Date,
        default: Date.now()


    },
    updatedAt:{
        type:Date

    },
    username:{
        type:String

    },
    _id: {
        type: String
    }
    

})



// module.exports=mongoose.model('tester',testerSchema)
module.exports =  mongoose.model('tester', testerSchema, 'tester')