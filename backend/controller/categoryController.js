
import { Category } from "../schema/categorySchema.js";


//CATEGORY CRUD
//Create a category
export const createCategory = async (req, res) => {
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
};
//Get category
export const getAllCategory= async (req, res) => {
  try {
    const allCategories = await Category.find();
    return res.status(200).json({
      message: " All categories  fetches successfully",
      data: allCategories,
    });
  } catch (error) {
    return res.status(500).json({ message: "internal server  error" });
  }
};

export const getSingleCategoryById= async (req, res) => {
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
};

export const updateCategoryById= async (req, res) => {
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
};

export const deleteCategoryById= async (req, res) => {
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
};
