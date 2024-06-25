const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const users = require('../database/db')
const jwtpassword = require('../config/config')



router.post('/signup',async(req,res)=>{
        // res.json({
        //     mssg:"signup endpoint working as expected"
        // })

        const inputPassword = req.body.password
        const inputConfirmPassword = req.body.confirmPassword
        const inputUsername = req.body.username
        const inputFirstname = req.body.firstname 
        const inputLastname = req.body.lastname 
        const inputGender = req.body.gender
        const inputPhone = req.body.phone 
        const inputEmail = req.body.email

        const response = await users.findOne({username:inputUsername})

        if(response){
            res.status(403).json({
                mssg:"Sorry username already exists"
            })
            return;
        }
        
        if(inputPassword != inputConfirmPassword){
            res.status(400).json({
                mssg:"Password Don't match"
            })
            return;
        }

            
        users.create({
                firstname: inputFirstname,
                lastname: inputLastname, 
                username: inputUsername,
                password: inputPassword,
                gender: inputGender,
                phone: inputPhone,
                email: inputEmail
            
            })
            .then(()=>{
                res.json({
                    mssg:"User successfully created"
                })
            })
            .catch(()=>{
                res.json({
                    mssg:"Something went wrong"
                })
            })
        
        

        


})

router.get('/login', (req,res)=>{

    username = req.headers.username
    password = req.headers.password 

    const response = users.findOne({
        username: username,
        password: password 

    }).then(()=>{

        const token = jwt.sign({username:username},jwtpassword)
        


    }).catch(()=>{
        res.json({
            mssg:"Invalid Username"
        })
        return
    })


    res.json({
        mssg:"login endpoint working as expected "
    })
})


router.get('/logout', (req,res)=>{
    res.json({
        mssg:"logout endpoint working as expected"
    })
})

module.exports = router