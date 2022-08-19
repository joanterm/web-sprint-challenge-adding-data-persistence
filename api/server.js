const express = require("express")
const server = express()
server.use(express.json())

//ROUTERS
const projectRouter = require("./project/router")
server.use("/api/projects", projectRouter)
const resourceRouter = require("./resource/router")
server.use("/api/resources", resourceRouter)
const taskRouter = require("./task/router")
server.use("/api/tasks", taskRouter)

//SANITY CHECK
server.get("/", (req, res) => {
    res.send("Express working on sprint challenge!")
})

module.exports = server