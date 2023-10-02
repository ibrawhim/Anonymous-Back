const express = require('express')
const router = express.Router()
const {signUp,signIn,message,view,deleteOne} = require('../controllers/user.controller')


router.post('/signup',signUp)
router.post('/signin',signIn)
router.post('/message',message)
router.post('/view',view)
router.post('/delete',deleteOne)


module.exports = router