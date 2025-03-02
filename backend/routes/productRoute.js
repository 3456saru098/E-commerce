import express from "express";
import { createProduct, deleteProductById, getAllProduct, getOneProductById, updateProductById } from "../controller/productController.js";
const router = express.Router();

router.post("/",createProduct);
router.get("/",getAllProduct);
router.get("/:id",getOneProductById);
router.patch("/:id",updateProductById);
router.delete("/:id",deleteProductById);

export default router;




