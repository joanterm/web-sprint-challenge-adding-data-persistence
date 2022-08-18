const express = require("express")
const server = express()
server.use(express.json())

//ROUTER
const projectRouter = require("./project/router")
server.use("/api/projects", projectRouter)

//SANITY CHECK
server.get("/", (req, res) => {
    res.send("Express working on sprint challenge!")
})

module.exports = server