const router = require("express").Router();
const userController = require("../../controllers/userController");


router.route('/login').get(userController.login);
router.route('/signup').post(userController.signup);
router.route('/validated').get(userController.validateToken);

module.exports = router;