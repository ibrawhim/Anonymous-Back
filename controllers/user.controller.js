const {userModel,messageModel} = require('../models/user.model')

const signUp = (req,res) => {
    let info = req.body
    let form = userModel(info)
    form.save()
    .then((result)=>{
        console.log(result);
        res.send({status: true, message: 'Sign Up Successful',result})
    })
    .catch((err)=>{
            if(err && err.keyValue.username){
                res.send({status: false, message: 'Username already exists'})
                console.log(err)
            }else if(err.keyValue.email){
                res.send({status: false, message: 'email already exists'})
            }
            
    })
}
const signIn = (req,res) => {
    let username = req.body.username
    userModel.findOne({username: username})
    .then((result)=>{
        console.log(result);
        if(result==null){
            res.send({status:false, message: 'Incorrect email or password'})
        }else {
        res.send({status: true, result})
        }
    })
    .catch((error)=>{
        console.log(error)
    })
}
const message = (req,res) => {
        
    let info = req.body
    form = messageModel(info)
    form.save()
    .then((response)=>{
        console.log(response)
        res.send({status: true, message: "Message sent successfully"})
    })
    .catch((err)=>{
        console.log(err)
        res.send({status: false, message: 'Message not sent'})
    })
}
const view = (req,res) => {
    let username = req.body.username
    messageModel.find({username: username})
    .then((response)=>{
        console.log(response);
        res.send({status:true, message: 'welcome', response})
    })
    .catch((error)=>{
        console.log(error);
    })
}

const deleteOne = (req,res) =>{
    console.log(req.body);
    messageModel.deleteOne({myTime: req.body.time, myDate: req.body.date, message: req.body.message})
    .then((myResult)=>{
        console.log(myResult);
        console.log(req.body);
        if(myResult){
            messageModel.find()
            .then((newResult)=>{console.log(newResult); res.send({status:true,message:'updated after deletion',newResult})})
        
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}


module.exports = {signUp,signIn,message,view,deleteOne}