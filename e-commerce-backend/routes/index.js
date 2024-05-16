const express = require('express')
const router = express.Router()

const userRegistrationController = require('../controller/user-registration')
const userLoginController = require('../controller/user-login')
const userDetailsController = require('../controller/user-details')
const authToken = require('../middleware/authToken')

router.post('/register',userRegistrationController)
router.post('/login',userLoginController)
router.get('/user-details',authToken,userDetailsController)

module.exports = router