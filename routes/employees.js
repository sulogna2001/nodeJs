const express=require('express')
const router=express.Router()
const Employee=require('../models/employee')

//Get all
router.get('/', async (req,res)=>{
    try {
        const employees = await Employee.find()
        res.json(employees)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }

})

router.get('/:id',(req,res)=>{
    res.send(req.params.id)
    
})
//GET /tester?gender="Male" -> List all tester of same gender 

router.get('/employees' , (req,res)=>{
    var gender= req.params.gender
    res.json({'hello':'hello'})
})
//GET by ID
router.get('/:id',(req,res)=>{
    collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
})
//update
router.patch('/:id',(req,res)=>{
    
})
//delete
router.delete('/:id',(req,res)=>{

    
})

module.exports=router