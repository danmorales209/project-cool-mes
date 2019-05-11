const path = require("path");
const router = require("express").Router();
const GET = require('./get');
const PUT = require('./put');
const POST = require('./post');

// API Routes
router.route('/get', GET);
router.route('/put', PUT);
router.route('/post', POST);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
