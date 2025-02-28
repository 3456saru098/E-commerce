import express from "express";
import mongoose from "mongoose";
import { Product } from "./schema/productSchema.js";
import { Category } from "./schema/categorySchema.js";
import { v2 as cloudinary } from "cloudinary";
import 'dotenv/config'
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
// const multer  = require('multer')
import multer from "multer";
const upload = multer({ dest: "uploads/" });
// App Config
const app = express();
//Middleware
app.use(express.json());

//Database Config
try {
  mongoose.connect(
    "mongodb+srv://saritasharmaprajuli:1agOBc201n8NAVuX@cluster0.1giaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("MongoDb connected");
} catch (error) {
  console.log("Error in connecting in database", error);
}

// Product CRUD
//Create a product
app.post("/products", async (req, res) => {
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
});
//Get all products
app.get("/products", async (req, res) => {
  try {
    const allProducts = await Product.find();
    return res.status(200).json({
      message: "all product fetch successfully",
      data: allProducts,
    });
  } catch (error) {
    return res.status(500).json({ message: "internal server  error" });
  }
});

//Get single product
app.get("/products/:id", async (req, res) => {
  try {
    const singleProduct = await Product.findById(req.params.id);
    return res.status(200).json({
      message: "Single product fetched successfully",
      data: singleProduct,
    });
  } catch (error) {
    return res.status(500).json({ message: "internal server  error" });
  }
});

//Update a product
app.patch("/products/:id", async (req, res) => {
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
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
// Delete a product
app.delete("/products/:id", async (req, res) => {
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
});

//CATEGORY CRUD
app.post("/categories", upload.single("imageUrl"), async (req, res) => {
  try {
    // Check if name already exist
    const categoryExist = await Category.findOne({ name: req.body.name });
    if (categoryExist) {
      return res.status(409).json({ message: "Category already exists" });
    }

    //Handle the image upload before saving to database
    //  console.log(req.file)

    cloudinary.uploader;
    const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);
    //  console.log(cloudinaryResponse,"Hello its cloudinary response");
    const newCategory = await new Category({
      ...req.body,
      imageUrl: cloudinaryResponse.secure_url,
    }).save();
    return res.status(201).json({
      message: "Category created successfully",
      data: newCategory,
    });
  } catch (error) {
    return res.status(500).json({ message: "internal server  error" });
  }
});

app.get("/categories", async (req, res) => {
  try {
    const allCategories = await Category.find();
    return res.status(200).json({
      message: " All categories  fetches successfully",
      data: allCategories,
    });
  } catch (error) {
    return res.status(500).json({ message: "internal server  error" });
  }
});

app.get("/categories/:id", async (req, res) => {
  try {
    const singleCategory = await Category.findById(req.params.id);
    if (!singleCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({
      message: " Single category fetch successfully",
      data: singleCategory,
    });
  } catch (error) {
    return res.status(500).json({ message: "internal server  error" });
  }
});

app.patch("/categories/:id", async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      message: "  category updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    return res.status(500).json({ message: "internal server  error" });
  }
});

app.delete("/categories/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({
        message: "Category not found",
      });
    }
    return res.status(200).json({
      message: "Category deleted succesfully",
      data: deletedCategory,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
