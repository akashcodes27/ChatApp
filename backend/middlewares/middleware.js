const express = require("express")



function senderMiddleware(){
    console.log("middleware working")
}


function receiverMiddleware(){
    console.log("middleware working")
}

module.exports = {
    senderMiddleware,
    receiverMiddleware
}


