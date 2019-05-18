const router = require("express").Router();
const userController = require("../../controllers/userController");

// LOGIN & SIGNUP ROUTES //
router.route('/login').post(userController.login);
router.route('/signup').post(userController.signup);
router.route('/validated').post(userController.validateToken);

module.exports = router;