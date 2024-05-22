const express = require('express')
const router = express.Router()

const userRegistrationController = require('../controller/user-registration')
const userLoginController = require('../controller/user-login')
const userDetailsController = require('../controller/user-details')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user-logout')
const allUsers = require('../controller/all-users')
const updateUsers = require('../controller/update-user')
const uploadProductController = require('../controller/upload-product')
const getAllProducts = require('../controller/get-all-products')
const updateProductController = require('../controller/update-product')
const deleteProductController = require('../controller/delete-product')
const deleteUser = require('../controller/delete-user')

router.post('/register',userRegistrationController)
router.post('/login',userLoginController)
router.get('/user-details',authToken,userDetailsController)
router.get('/logout',userLogout)

//admin panel
router.get('/all-users',authToken,allUsers)
router.post('/update-user',authToken,updateUsers)
router.delete('/delete-user', authToken,deleteUser)

// product
router.post('/upload-product',authToken,uploadProductController)
router.get('/get-all-products', getAllProducts)
router.post('/update-product',authToken,updateProductController)
router.delete('/delete-product', authToken,deleteProductController)

module.exports = router