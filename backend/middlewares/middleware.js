const express = require("express")
const jwt = require("jsonwebtoken")
const {jwtpassword} = require("../config/config")
const {users} = require("../database/db")



async function senderMiddleware(req,res,next){

    //this middleware is used in those endpoints where only logged in user has access, hence we verify jwt token in this middleware
    //after we login, a jwttoken is generated and stored inside the cookies, now lets check if we can retrieve it from cookies and verify it before allowing user to successfullly pass through the middleware 

    const token = req.cookies.jwt
    console.log(token)
    console.log("sender middleware working")

    const decodedRes = jwt.verify(token, jwtpassword)

    if(!decodedRes){
        res.status(403).json({
            mssg:"You don't have the permission to access this endpoint"
        })
        return;
    }
    console.log("token verified successfully")

    const userCreds  = await users.findOne({username: decodedRes.username})

    console.log(userCreds)

    req.user = userCreds   //vip line, we will use req.user to get access to user object in messages_routes

    next();
}


function receiverMiddleware(req,res,next){
    console.log("middleware working")
    next();
}

module.exports = {
    senderMiddleware,
    receiverMiddleware
}


