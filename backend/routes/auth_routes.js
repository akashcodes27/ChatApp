const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const {users, messages, conversations} = require('../database/db')
const {jwtpassword} = require('../config/config')
const bcrypt = require('bcryptjs')



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
        const inputProfile = req.body.profilePicture


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


        //this is for encrypting passwords, we use bcrypt library which we installed using npm 
        //value inside genSalt() indicates the level of security, high hash value means high security
        // const salt = await bcrypt.genSalt(10)


        // const HashedInputPassword = await bcrypt.hash(inputPassword, 10)
        //I have used promises for genSalt() and async-await for hash()

        

            
        users.create({
                firstname: inputFirstname,
                lastname: inputLastname, 
                username: inputUsername,
                password: inputPassword,
                gender: inputGender,
                phone: inputPhone,
                email: inputEmail,
                profilePicture: inputProfile
             
            })
            .then(()=>{
                res.json({
                    mssg:"User successfully created"
                })
            })
            .catch(()=>{
                res.json({
                    mssg:"Some error"
                })
            })
        
        

        


})

router.get('/login', async(req,res)=>{

    InputUsername = req.headers.username
    InputPassword = req.headers.password 

    const response = await users.findOne({
        username: InputUsername,
        password: InputPassword 

    })
    

        if(response){

            const token = jwt.sign({username:InputUsername},jwtpassword)

            res.cookie("jwt", token, {
                httpOnly: true,                //httpOnly is used to prevent XSS cross site scripting attacks
                sameSite: "strict"             //samSite used to prevent cross-site forgery  attacks
            })
            //this vip step, it saves token as cookie 


            res.json({
                mssg: token
        })
        }
        else{

            res.json({
                mssg:"Incorrect Username or Password"
            })
            return
        }

    


    
})


router.get('/logout', (req,res)=>{


    //in order to logout, we simply have to clear out the cookies, this is how we do it 
    res.cookie("jwt","", {
        maxAge:0
    })


    res.json({
        mssg:"Successfully logged out "
    })
})

module.exports = router 