const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('./connections/mongoose.connection')
const app = express()
const userRouter = require('./routes/user.route')
const cors = require('cors')


app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}))
app.use(cors())
app.use(bodyParser.json({limit:'50mb'}))
app.use('/user', userRouter)



app.listen('4678',()=>{
    console.log('connected at port 4678');
})