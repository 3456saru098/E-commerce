import { User } from "../schema/userSchema.js";


//Create User
export const registerUser= async(req,res)=>{};

// Login user
export const loginUser= async(req,res)=>{};

// Get all user
export const getAllUsers = async(req,res)=>{
    try {
        const allUsers = await User.find();
        return res.status(200).json({
            message: "All users fetched successfully",
            data: allUsers,
          });
    } catch (error) {
        return res.status(500).json({ 
            message: "Error in fetching users",
            error: error, 

        });
    }
};

// Get single  user by id
export const getSingleUserById = async(req,res)=>{};

//Update user by id
export const updateUserById = async(req,res)=>{};

// Delete user by id
export const deleteUserById = async(req,res)=>{};




