const express=require('express')
const router=express.Router()
const Employee=require('../models/employee')

//Get all
router.get('/employees', async (req,res)=>{
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
    console.log('hello')
})
//GET by ID
router.get('/:id',(req,res)=>{
    
})
//update
router.patch('/:id',(req,res)=>{
    
})
//delete
router.delete('/:id',(req,res)=>{

    
})

module.exports=router