const express = require("express")
const projectRouter = express.Router()
const {
    getAllProjects,
    getProjectsById,
    addNewProject} = require("./model")

//GET
projectRouter.get("/", (req, res) => {
    getAllProjects()
        .then((result) => {
            res.status(200).json(result)
        })
})

//GET BY ID
projectRouter.get('/:id', (req, res, next) => {
    getProjectsById(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(next)
})

//POST
projectRouter.post('/', (req, res, next) => {
    addNewProject(req.body)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(next)
})

//ERROR HANDLING
projectRouter.use((err, req, res, next) =>{
    res.status(err.status || 500).json({message: err.message})
})



module.exports = projectRouter
