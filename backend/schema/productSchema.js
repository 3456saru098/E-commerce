import mongoose from "mongoose";

//Table Schema
const productsSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: false },
  imageUrl: { type: String, required: true },
  price: { type: Number, required: true },
  previousPrice: { type: Number, required: true },
  category: { type: String, required: true },
});

// Table
 export const Product = mongoose.model("Product", productsSchema);