const express = require('express')
const router = express.Router()

const userRegistrationController = require('../controller/user-registration')

router.post('/register',userRegistrationController)

module.exports = router