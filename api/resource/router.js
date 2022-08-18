const express = require("express")
const resourceRouter = express.Router()
const  {
    getAllResources,
    postNewResource
} = require("./model") 

//GET
resourceRouter.get("/", (req, res, next) => {
    getAllResources()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch(next)
})

//POSTS
resourceRouter.post("/", (req, res, next) => {
    postNewResource(req.body)
        .then((result) => {
            res.status(201).json(result)
        })
        .catch(next)
})


//ERROR HANDLING
resourceRouter.use((err, req, res, next) =>{
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = resourceRouter


