const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/inventory"
router.route("/GET").get(userController.findAll);

router.route("/POST").post(userController.create);

// Matches with "/api/inventory/:id"
router.route("/GET/:id").get(userController.findById);
router.route("/POST/:id").post(userController.update);
// .route("/inventory:id")
// .get(userController.findById)
// .put(userController.update)
// .delete(userController.remove);

module.exports = router;
