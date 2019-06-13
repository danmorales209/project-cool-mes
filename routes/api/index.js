const path = require("path");
const router = require("express").Router();
const equipmentRoute = require("./equipment");
const instructionsRoute = require("./instructions");
const inventoryRoute = require("./inventory");
const recipeInventoryRoute = require("./recipeInventory");
const orderRoute = require("./order");
const recipeRoute = require("./recipe");

// API Routes
router.use("/equipment", equipmentRoute);
router.use("/instructions", instructionsRoute);
router.use("/inventory", inventoryRoute);
router.use("/order", orderRoute);
router.use("/recipe", recipeRoute);
router.use("/recipeInventory", recipeInventoryRoute);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
