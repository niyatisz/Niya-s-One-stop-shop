const addToCartModel = require("../../models/cart-product");

async function addToCartController(req,res) {
    try {
        const {productId} = req?.body
        const currentUser = req?.userId

        const isProductAvailable = await addToCartModel.findOne({productId : productId})

        if(isProductAvailable) {
            res.status(400).json({
                message: "Product Already Added",
                error: true,
                success: false
            })
        }
        const payload = {
            productId : productId,
            productQuantity: 1,
            userId : currentUser
        }

        const addNewProductToCart = new addToCartModel(payload)
        const saveProduct = await addNewProductToCart.save()


        res.status(200).json({
            message: "Product Added To Cart",
            data: saveProduct,
            error: false,
            success: true
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        });
    }
}

module.exports = addToCartController