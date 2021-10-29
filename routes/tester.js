const express = require('express')
const controller = require('../controller')

const router=express.Router()

router.get('/testers', controller.testerController.listAllTesters)

router.get('/tester', controller.testerController.tester)

router.delete('/tester', controller.testerController.deleteCredit)

router.put('/tester/:id', controller.testerController.newTesterTask)

router.get('/tester/:id', controller.testerController.taskId)

router.get('/task-completed', controller.testerController.tasksCompleted)

router.put('/tester', controller.testerController.testerIncome)





module.exports = router