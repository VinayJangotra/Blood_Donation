const inventoryModel = require("../models/inventoryModel");
const userModels = require("../models/userModels");

const createInventoryController=async (req,res)=>{
try {
   // validation
   const {email,inventoryType}=req.body;
   const user= await userModels.findOne({email});
    if(!user){
         return res.status(400).json({
              success:false,
              message:"User not found"
         });
    }
    if(inventoryType === "in" && user.role != "donar"){
            return res.status(400).json({
                success:false,
                message:"You are not a donar"
            });
    } 
    if(inventoryType === "out" && user.role != "hospital"){
        return res.status(400).json({
            success:false,
            message:"You are not a hospital"
        });
    }
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    res.status(200).json({
        success:true,
        message:"New Blood record created successfully",
        inventory
    });
} catch (error) {
    console.log(error);
    res.status(500).json({
        success:false,
        message:"Server Error",
        error
    });
    
}
}
// Get all the  blood records
const getInventoryController = async (req,res)=>{
    try {
        const inventory = await inventoryModel.find({organisation:req.body.userId}).populate('donar').populate('hospital').sort({createdAt: -1});
        res.status(200).json({
            success:true,
            message:"All Blood records",
            inventory
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Server Error",
            error
        });
    }
}
module.exports = {createInventoryController,getInventoryController};