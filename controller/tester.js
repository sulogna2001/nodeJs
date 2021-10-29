const modelObject=require('../models')


const listAllTesters = async (req, res) => {
    var listOfTesters=[]
    try {
    listOfTesters = await modelObject.testerModel.find({}).exec()
    // console.log(listOfTesters)
        
    } catch (error) {
        console.log(error)
        
    }
    res.json({status:true , data: listOfTesters})
}

const tester = async (req, res) => {
    var testerGender=[]
    const gender = req.query.gender
    try{
        testerGender= await modelObject.testerModel.find({gender: 'Male'}).exec();
      
        // console.log(testerGender)
    }
    catch(error) {
        console.log(error)
    }
    res.json({status:true , data : testerGender})


}
const deleteCredit = async (req, res) => {
    const creditScore = req.query.credit || 0;
    const credit=req.query.credit
    try{
        creditTester=await modelObject.testerModel.remove({credit:creditScore}).exec()
        console.log(creditTester)
    }
    catch(error){
        console.log(error)
        res.json({status:false})
        return
    }
    res.json({status:true})

}
//PUT /tester?testerTasks={taskID : '1212' , name : "" , completed : false , ....add more field }  -> PUT data = {} inside the testerTasks

const newTesterTask = async (req, res) => {
    var testerTask=req.body
    var testerId = req.params.id
    // change taskId to _id
    testerTask._id = testerTask.taskID
    delete tester.taskID

    try{
        var data=await modelObject.testerModel.findOne({_id: testerId}).exec()
        data.testerTasks.push(testerTask)
        await data.save()
    }
    catch(error){
        console.log(error)
        res.json({status: success, message: 'Something went wrong'})
        return
    }
    res.json({status: true})
}
const taskId = async (req, res) => {
    
    var testerData = {}
    var testerId = req.params.id

    try{
        testerData=await modelObject.testerModel.findOne({_id:testerId}).exec()
        console.log(testerData)

    }
    catch(error){
        console.log(error)
        res.json({status: false, message: 'Something went wrong'})
        return
    }
    res.json({status:true , data: testerData})

}
const tasksCompleted = async (req, res) => {
    var data = [];

    try{
        var docs = await modelObject.testerModel.find({}, null, {lean: Object}).select('testerTasks').exec()
        for (var index in docs) {
            data = [...data, ...docs[index].testerTasks]
        }
        data = data.filter( obj=> obj.isCompleted === false)
    }catch(error) {
        console.error(error)
        res.json({status: false, message: 'Something went wrong'})
    }
    res.json({status:true, data})

}

const testerIncome = async (req, res) => {
    const  income= req.query.income;
    const testerNewIncome=req.body
    var testerIncomeData=[]
    try{
        testerIncomeData = await modelObject.testerModel.find({income: {$gt: income}}).exec()
        testerIncomeData.forEach(async model=> {
            model.testerTasks.push(testerNewIncome)
            await model.save()
        });
    }
    catch(error){
        console.error(error)
        res.json({status: false})
        return;
    }

    res.json({status:true})

}



module.exports = { 
    listAllTesters,
    tester,
    deleteCredit,
    newTesterTask,
    taskId,
    tasksCompleted,
    testerIncome
}