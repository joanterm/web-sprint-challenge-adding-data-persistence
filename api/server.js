// build your server here and require it from index.js
const express = require("express")
const server = express()
server.use(express.json())


//SANITY CHECK
server.get("/", (req, res) => {
    res.send("Express working on sprint challenge!")
})

module.exports = server