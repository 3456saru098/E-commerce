import express from "express";
const router = express.Router();
import multer from "multer";
import { createCategory, deleteCategoryById, getAllCategory, getSingleCategoryById, updateCategoryById } from "../controller/categoryController.js";
const upload = multer({ dest: "uploads/" });
import { verifyToken } from "../middleware/verifyToken.js";

router.post("/",verifyToken,upload.single("imageUrl"),createCategory);
router.get("/",getAllCategory);
router.get("/:id",getSingleCategoryById);
router.patch("/:id",verifyToken,updateCategoryById);
router.delete("/:id",verifyToken,deleteCategoryById);

export default router;




