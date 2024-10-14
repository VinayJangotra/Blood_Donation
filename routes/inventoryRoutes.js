const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
} = require("../controllers/inventoryController");

const router = express.Router();

// add inventory
router.post("/create-inventory",authMiddleware,createInventoryController);
// get all the blood records
router.get("/get-inventory",authMiddleware,getInventoryController);
// get the invnetory routes
router.get("/get-donars", authMiddleware, getDonarsController);
router.get("/get-hospitals", authMiddleware, getHospitalController);
module.exports= router;