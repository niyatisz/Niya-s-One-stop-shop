const express = require('express')
const router = express.Router()

const userRegistrationController = require('../controller/user/user-registration')
const userLoginController = require('../controller/user/user-login')
const userDetailsController = require('../controller/user/user-details')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/user-logout')
const allUsers = require('../controller/user/all-users')
const updateUsers = require('../controller/user/update-user')
const uploadProductController = require('../controller/product/upload-product')
const getAllProducts = require('../controller/product/get-all-products')
const updateProductController = require('../controller/product/update-product')
const deleteProductController = require('../controller/product/delete-product')
const deleteUser = require('../controller/user/delete-user')
const getCategoryProduct = require('../controller/product/get-category-product')
const getCategoryWiseProduct = require('../controller/product/get-category-wise-product')
const getProductDetails = require('../controller/product/get-product-details')
const addToCartController = require('../controller/user/add-to-cart')
const productCountController = require('../controller/user/product-count')
const addToCartProductView = require('../controller/user/add-to-cart-product-view')

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
router.get('/get-category-product',getCategoryProduct)
router.get('/get-category-wise-product/:category', getCategoryWiseProduct)
router.post('/product-details', getProductDetails)

//user
router.post('/add-to-cart',authToken,addToCartController)
router.get('/product-count',authToken,productCountController)
router.get('/view-cart',authToken,addToCartProductView)


module.exports = router