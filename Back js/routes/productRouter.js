const express = require("express");
const router = express.Router(); // router module declatarion 
const productController = require("../controllers/productController")
const authMidd = require("../middleware/authMidd");


router.get("/:id", authMidd, productController.getProduct);
router.post("/", authMidd, productController.createProduct );
router.put("/:id", authMidd, productController.updateProduct);
router.delete("/");

//module has to be exported 
module.exports= router;