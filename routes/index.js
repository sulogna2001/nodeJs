const express=require('express')
const testerRoute = require('./tester')

const router=express.Router()

router.use('/api', testerRoute)

module.exports=router
