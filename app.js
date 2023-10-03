const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRouter = require('./routes/user.route')
const dotenv = require('dotenv')
dotenv.config()

app.use(express.urlencoded({extended:true,limit:'50mb'}))
app.use(bodyParser.urlencoded({extended: true,limit:'50mb'}))
app.use(express.json({limit:'50mb'}))
app.use('/', userRouter)

let URI = process.env.MONGO

mongoose.connect(URI)
.then(()=>{
    console.log('mongoose connected');
})
.catch((err)=>{
    console.log(err);
})


app.listen('4678',()=>{
    console.log('connected at port 4678');
})