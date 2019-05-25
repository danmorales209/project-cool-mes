const router = require("express").Router();
const userController = require("../../controllers/userController");

// LOGIN & SIGNUP ROUTES //
router.route('/login').post(userController.login);
router.route('/signup').post(userController.signup);
router.route('/validate').post(userController.validateToken);
router.route('/test').get(userController.test);

module.exports = router;