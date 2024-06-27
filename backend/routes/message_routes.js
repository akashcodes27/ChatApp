const express = require("express")
const router = express.Router()
const {users, messages, conversations} = require("../database/db")
const {senderMiddleware} = require("../middlewares/middleware")



router.post("/sender/:userID", senderMiddleware, async(req,res)=>{
        
        try {

            const message = req.body.message
            const receiverID = req.params.userID

            const senderID = req.user._id

            //first lets check if the conversation between receiver and sender exists

            const conversationObj = await conversations.findOne({
                participants: { $all:[senderID, receiverID]}
            })

            //if the conversation doesnt exist, then we create it

            if(!conversationObj){
                const conversationObjj = await conversations.create({
                    participants:[senderID, receiverID]
                })
            }

        

            //we create a message instance
            const messageObj = await new messages({
                senderID: senderID,
                receiverID: receiverID,
                messages: req.body.message
            }).save()


            //when we created an instance of conversation instance, we didnt add anything to messages array, this will basically contain message objects IDs. Hence we push the id of newly created messageObj
           
            console.log(`the id of message instance is ${messageObj._id}`)


            //extremely important, always remember, whenever you make any changes to a model instance like for example we pushed messageObj IDs in the array, always SAVE
            conversationObj.messages.push(messageObj._id)
            await conversationObj.save()

            //even when we use "new Message({})" it is followed up by .save() to commit those changes in the database 
              
            
           

            res.json({
                mssg:"sender endpoint successfully implemented"
            })

        } catch (error) {
            res.status(500).json({
                mssg:"Internal Server Error"
            })
        }
})







module.exports = router 







/*

Explanation for api/messages/sender/65634663df26dv6vdesomeid

So basically, If I am messaging some person for first time, a new conversation instance is created. If not messaging for first time, then simply find the conversation instance, no need to create it.

Inside this instance, there is a field called: message:[], this array will contain IDs of all messages sent between 2 users.

Every time a user sends a new message, a new message instance is created with new ID.
So if there are 120 messages between 2 users Akash and Meet, then message[] will contain 120 IDs. 
Whenever I send a message, senderID will be mine, receiverID will be Meet;s
Whenever I receive a message, senderID will be Meet's, receiverID will me Mine. 
message field inside message instance will store the actual message, each message instance will have an associated ID which will be stored inside the messages[]array inside the conversation instance. 

for now, our api/messages/sender endpoint returns json containing message instance 

To successfully run this endpoint, we have to pass an a message in the body, and an ID in the params 

senderID: obtained from decoding jwt token in the middleware
receiverID: obtained from the req.params 
message: obtained from req.body {"messages":"this is a message"}


*/



