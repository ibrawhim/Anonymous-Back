const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('./connections/mongoose.connection')
const userRouter = require('./routes/user.route')


app.use(cors())
app.use(express.urlencoded({extended:true,limit:'50mb'}))
app.use(bodyParser.urlencoded({extended: true,limit:'50mb'}))
app.use(express.json({limit:'50mb'}))
app.use('/', userRouter)



app.listen('4678',()=>{
    console.log('connected at port 4678');
})