import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js"

// @desc    Fetch all products
// @route   Get /api/products
// @access  public
const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({})
    res.json(products) 
})


// @desc    Fetch single product
// @route   Get /api/products
// @access  public
const getProductById = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    }
    else {
        res.status(404)
        throw new Error("Product not found") // This is gonna go through our error handler
    }   
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        // All admins can delete products
        // If i wanted admins who created the product to be the ones who delete the product
        // I would add a check here
        // if (req.user._id === product.user._id)
        await product.delete()
        res.json({message: "Product successfully deleted"})
    }
    else {
        res.status(404)
        throw new Error("Product not found") // This is gonna go through our error handler
    }   
})


export {getProducts, getProductById, deleteProduct}