const mongoose = require('mongoose')

let userSchema = {
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}

let messageSchema = {
    username: {type: String, required: true},
    message: {type: String, required: true},
    myDate: {type: String, required: true},
    myTime: {type: String, required: true}
}

let userModel = mongoose.model('user',userSchema)
let messageModel = mongoose.model('message',messageSchema)

module.exports = {userModel,messageModel}
