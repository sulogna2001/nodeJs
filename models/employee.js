const mongoose=require('mongoose')

const employeeSchema=new mongoose.Schema({
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
        type:Boolean

    },
    _id:{
        type:mongoose.Schema.Types.ObjectId

    },
    name:{
        type:String

    },
    email:{
        type:String


    },
    dob:{
        type:Number


    },
    gender:{
        type:String


    },
    occupation:{
        type:String


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
        isCompleted:{
            type:Boolean,
            

        },
        _id: {
            type:mongoose.Schema.Types.ObjectId

            
        },
        reference:{
            type:String

        },
        completedTime:{
            type:Date
        },
        credit:{
            type:Number
        }



    },
    __v:{
        type:Number

    },
    createdAt:{
        type:Date


    },
    updatedAt:{
        type:Date

    },
    username:{
        type:String

    }
    

})



module.exports=mongoose.model('Emoloyee',employeeSchema)