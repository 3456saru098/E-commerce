import express from "express";
import mongoose from "mongoose";


// App Config
const app = express();
//Middleware
app.use(express.json());

//Database Config
try {
  mongoose.connect(
    "mongodb+srv://saritasharmaprajuli:1agOBc201n8NAVuX@cluster0.1giaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
} catch (error) {
  console.log("Error in connecting in database", error);
}

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
const Product = mongoose.model("Product", productsSchema);

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
    const singleProduct= await Product.findById(req.params.id);
    return res.status(200).json({
      message:"Single product fetched successfully",
      data:singleProduct,
    })
    
  } catch (error) {
    return res.status(500).json({ message: "internal server  error" });
    
  }
});

//Update a product
app.patch("/products/:id", async (req, res) => {});

app.get("/", (req, res) => {
  res.send("Hello world");
});
// Delete a product
app.delete("/products/:id", async (req, res) => {
try {
   const checkProduct = await Product.findById(req.params.id);
 if (!checkProduct){
   return res.status(404).json({message:"Product not found"});
 }


  const deletedProduct= await Product.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    message:"Product deleted succcessfully",
    data: deletedProduct,
  })
  
} catch (error) {

    return res.status(500).json({ message: "internal server  error" });
  
}

});



app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
