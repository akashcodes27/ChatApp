const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://akashofficiall2002:Nashermiles123@cluster0.vsshd9j.mongodb.net/chatappusers")

const userSchema= new mongoose.Schema({
    username: {
        type:String,
        unique:true,
        required:true,
        trim:true
    },

    firstname :{
        type:String,
        required:true,
        trim:true
    },

    lastname :{
        type:String,
        required:false,
        trim:true
    },

    password: {
        type: String,
        required:true,
        minlength: 8,
        maxlength: 15,

    },

    phone: {
        type:String,
        unique:true,
        required:true,
        trim:true 
    },


    email: {
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true
    },

    gender:{
        type:String,
        required:true,
        enum:["male","female","Prefer Not To Say"]
    }
    ,

    profilePicture: {
        type:String,
        required:false,
        default:""
    }

})

const users = mongoose.model("users", userSchema)

module.exports = users









