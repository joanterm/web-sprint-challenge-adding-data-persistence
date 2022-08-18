const express = require("express")
const projectRouter = express.Router()


//GET
projectRouter.get("/", (req, res) => {
    console.log("router works")
})

module.exports = projectRouter
