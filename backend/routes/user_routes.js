const express = require('express')
const router = express.Router()
const {users} = require("../database/db")
const { senderMiddleware } = require('../middlewares/middleware')

router.get('/trial',(req,res)=>{
    res.json({
        mssg:"This endpoint works"
    })
})


router.get('/getAllUsers', senderMiddleware , async(req,res)=>{

    //purpose of this endpoint is to retrieve users whose chats are to be displayed in the application

    const senderID = req.user._id

    const allUsers = await users.find({ _id: {$ne: senderID}  }).select("-password")
    //above statement basically means: find all users except the user with "senderID"
    //we did select("-password") to remove password from the details of users in allUsers

    res.status(200).json({
        mssg:allUsers
    })
})




module.exports = router