import express from "express";
const router = express.Router();
import multer from "multer";
import { createCategory, deleteCategoryById, getAllCategory, getSingleCategoryById, updateCategoryById } from "../controller/categoryController.js";
const upload = multer({ dest: "uploads/" });


router.post("/",upload.single("imageUrl"),createCategory);
router.get("/",getAllCategory);
router.get("/:id",getSingleCategoryById);
router.patch("/:id",updateCategoryById);
router.delete("/:id",deleteCategoryById);

export default router;




