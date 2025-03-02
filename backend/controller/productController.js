
import { Product } from "../schema/productSchema.js";

// Product CRUD
//Create a product
export const createProduct= async (req, res) => {
    try {
      //Check if product name already taken or not
      const productExist = await Product.findOne({ name: req.body.name });
      //this is for name
      //if we want to check for another like email, pp etc just we need to change the name instead of name
      if (productExist) {
        return res
          .status(409)
          .json({ message: "Name already taken,please choose different name" });
      }
  
      const newProduct = await new Product(req.body).save();
      return res.status(201).json({
        message: "product created successfully",
        data: newProduct,
      });
    } catch (error) {
      console.log("Error in creating a produtct", error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  };
  //Get all products
  export const getAllProduct= async (req, res) => {
    try {
      const allProducts = await Product.find();
      return res.status(200).json({
        message: "all product fetch successfully",
        data: allProducts,
      });
    } catch (error) {
      return res.status(500).json({ message: "internal server  error" });
    }
  };
  
  //Get single product
  export const getOneProductById= async (req, res) => {
    try {
      const singleProduct = await Product.findById(req.params.id);
      return res.status(200).json({
        message: "Single product fetched successfully",
        data: singleProduct,
      });
    } catch (error) {
      return res.status(500).json({ message: "internal server  error" });
    }
  };
  
  //Update a product
  export const updateProductById= async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
  
      if (!updatedProduct) {
        return res.status(400).json({ message: "Product not found" });
      }
      return res.status(200).json({
        message: "Product update successfully",
        data: updatedProduct,
      });
    } catch (error) {
      return res.status(500).json({ message: "internal server  error" });
    }
  };
  

  // Delete a product
  export const deleteProductById= async (req, res) => {
    try {
      const checkProduct = await Product.findById(req.params.id);
      if (!checkProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      return res.status(200).json({
        message: "Product deleted succcessfully",
        data: deletedProduct,
      });
    } catch (error) {
      return res.status(500).json({ message: "internal server  error" });
    }
  };