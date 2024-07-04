const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 7000
const authRoutes = require('./routes/auth_routes')
const messageRoutes = require('./routes/message_routes')
const userRoutes = require("./routes/user_routes")

const cookieParser = require("cookie-parser")

app.use(bodyParser.json())


app.get('/', (req,res)=>{
    res.json({
        mssg:"Server working fine"
    })
})

app.use('/api/auth', authRoutes)
app.use(cookieParser())
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)



app.use((req,res,next)=>{

    res.status(404).json({
        mssg:"Sorry the URL you requested does not exist"
    })
})

app.use((err,req,res,next)=>{

    res.status(500).json({
        mssg:"Sorry Internal Server Error"
    })
})

   
   





app.listen(PORT, ()=>{
    console.log("Server running at port 8000")
})