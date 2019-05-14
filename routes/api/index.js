const path = require("path");
const router = require("express").Router();
const inventoryRoute = require("./inventory");

// API Routes
router.use("/inventory", inventoryRoute);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
