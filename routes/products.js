const express = require("express")
const router = express.Router();
const {getAllProducts,getAllProductsTestings} = require("../controllers/products")

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTestings);


module.exports = router;