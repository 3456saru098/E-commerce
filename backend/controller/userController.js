import { User } from "../schema/userSchema.js";
import bcrypt from "bcrypt"
const saltRounds = 10;
import jwt from "jsonwebtoken";
//saltrounds 10 means complexity of password 
//Create User
export const registerUser= async(req,res)=>{
  try {
   // Check if user already exists
   const userExists = await User.findOne({email:req.body.email}) 
   if(userExists){
    return res.status(409).json({
        message: "user already exists with this email please choose another email",
    })
   }

   
    //Hash the before saving it to the database
   const hashedPassword= await bcrypt.hash(req.body.password,saltRounds);
   console.log(hashedPassword)

     const newRegisteredUser= await new User({...req.body,password:hashedPassword}).save();
     return res.status(201).json({
        message:"User registered successfully",
        data:newRegisteredUser,
     })


  } catch (error) {
    return res.status(500).json({
        message: "Error while registering",
        error: error,
      });
  }

};

// Login user
export const loginUser= async(req,res)=>{
    try {
        
        //Check user exist or not 
        const userExists = await User.findOne({email:req.body.email}) 
        if(!userExists){
         return res.status(409).json({
             message: "You are not registered yest, Please register before login",
         })
        }
        //If user exist compare the password
        const isPasswordMatched= await bcrypt.compare(req.body.password,userExists.password);
        if(!isPasswordMatched){
            return res.status(401).json({
                message:"password is not correct"
            })
        }
        // If password match then generate the jwt token 
        const myToken = await jwt.sign({email:userExists.email},"this_is_private_key",{expiresIn:"1h"})
        console.log(myToken)
        return res.status(200).json({
            message:"User login successfully",
            token: myToken,
            user:userExists,
        })

    } catch (error) {
        return res.status(500).json({
            message: "Error while login user",
            error: error,
          });
    }
};









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




