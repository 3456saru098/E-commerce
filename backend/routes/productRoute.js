import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProduct,
  getOneProductById,
  updateProductById,
} from "../controller/productController.js";
const router = express.Router();
import multer from "multer";
import { verifyToken } from "../middleware/verifyToken.js";
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("imageUrl"), createProduct)
router.get("/", getAllProduct);
router.get("/:id", getOneProductById);
router.patch("/:id",upload.single("imageUrl"), updateProductById);
router.delete("/:id", deleteProductById);

export default router;
