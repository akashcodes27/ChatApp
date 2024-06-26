const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 8000
const authRoutes = require('./routes/auth_routes')
const messageRoutes = require('./routes/message_routes')

app.use(bodyParser.json())


app.get('/', (req,res)=>{
    res.json({
        mssg:"Server working fine"
    })
})

app.use('/api/auth', authRoutes)
app.use('/api/messages',messageRoutes)

   
   





app.listen(PORT, ()=>{
    console.log("Server running at port 8000")
})