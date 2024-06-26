const express = require("express")
const router = express.Router()
const {users, messages, conversations} = require("../database/db")
const {senderMiddleware} = require("../middlewares/middleware")



router.post("/messages/:userID", senderMiddleware, (req,res)=>{

})

module.exports = router 









