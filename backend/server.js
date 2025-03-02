import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
import categoryRoute from "./routes/categoryRoute.js"
import productRoute from "./routes/productRoute.js"

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


app.use ("/categories",categoryRoute);
app.use ("/products",productRoute);



app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
