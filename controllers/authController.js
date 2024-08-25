const userModels = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables

const jwtSecret = process.env.JWT_SECRET || "12345678";

const registerController = async (req, res) => {
  try {
    const existingUser = await userModels.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: "User already exists",
      });
    }
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    console.log("req.body before saving:", req.body); // Debug log
    const user = new userModels(req.body);
    console.log("user object before saving:", user); // Debug log
    await user.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }
};
const loginController = async (req, res) => {
  try {
    const user = await userModels.findOne({ email: req.body.email });
    console.log(user); // Log the user document
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!comparePassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: "1d",
    });
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
      user,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }

};

module.exports = { registerController, loginController };
