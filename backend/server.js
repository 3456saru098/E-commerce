import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
import categoryRoute from "./routes/categoryRoute.js"
import productRoute from "./routes/productRoute.js"
import userRoute from "./routes/userRoute.js"


// App Config
const app = express();
//Middleware
app.use(express.json());

//Database Config
try {
  mongoose.connect( 
    process.env.MONGO_URL
  );
  console.log("MongoDb connected");
} catch (error) {
  console.log("Error in connecting in database", error);
}


app.use ("/categories",categoryRoute);
app.use ("/products",productRoute);
app.use ("/users",userRoute);




app.get ("/",(req,res)=>{
  res.send("Ecommerce is running");
})

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is  running on http://localhost:${process.env.APP_PORT}`);
});
