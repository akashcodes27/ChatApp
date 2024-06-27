const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://akashofficiall2002:Nashermiles123@cluster0.vsshd9j.mongodb.net/chatappusers")


//User Schema

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

}, {timestamps:true})


//Messages Schema

const messageSchema = new mongoose.Schema({

    //we are referencing senderID with users model, implying senderID will be obtained from users model
    senderID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,

    },

    //we are referencing receiverID with users model , implying receiverID will be obtained from users model
    receiverID :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },

    messages:{
        type: String,
        required: true
    }

    

}, {timestamps:true})
//the timestamps will update the timestamps for the messages 

//Conversation Schema

const conversationSchema = new mongoose.Schema({

    participants : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }],

    messages : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "messages",
        default:[]

    }]

},{timestamps: true})





const users = mongoose.model("users", userSchema)
const messages = mongoose.model("messages", messageSchema)
const conversations = mongoose.model("conversations", conversationSchema)

module.exports = {
    users,
    messages,
    conversations
}









