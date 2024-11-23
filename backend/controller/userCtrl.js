const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
//const { errorHandler } = require("../middlewares/errorHandler");
const crypto = require('crypto')
const { text } = require("body-parser");


// Create User
const createUser = asyncHandler(async (req, res) => {
    const { name, email, mobile, programName } = req.body;

    if (!name || !email || !mobile || !programName) {
        res.status(400);
        throw new Error("All fields are required");
    }
    
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        res.status(400);
        throw new Error("User already exists");
    }

    // Create a new user and store the program name
    const newUser = new User({
        name,
        email,
        mobile,
        registeredProgram: programName, // Store the program name
    });

    await newUser.save();

    res.status(201).json({
        message: "User registered successfully",
        user: newUser,
    });
});



//--------------------------------

// Get All Users
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});
// Get a user
const getaUser = asyncHandler(async (req, res) =>{
    const {id} = req.params;
    validateMongodbId(id);
})

module.exports = { createUser, getAllUsers,getaUser, 
    
 };
