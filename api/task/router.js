const express = require("express")
const taskRouter = express.Router()
const {
    getAllTasks,
    addNewTask
} = require("./model")

//GET
taskRouter.get('/', (req, res, next) => {
    getAllTasks()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch(next)
})

//POST
taskRouter.post('/', (req, res, next) => {
    addNewTask(req.body)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch(next)
})

//ERROR HANDLING
taskRouter.use((err, req, res, next) =>{
    res.status(err.status || 500).json({message: err.message})
})

module.exports = taskRouter