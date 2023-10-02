const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
let URI = process.env.MONGO

mongoose.connect(URI)
.then(()=>{
    console.log('mongoose connected');
})
.catch((err)=>{
    console.log(err);
})


module.exports = {mongoose}
