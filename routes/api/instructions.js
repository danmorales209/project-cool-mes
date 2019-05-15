const router = require("express").Router();
const instructionsController = require("../../controllers/instructionsController");

// Matches with "/api/inventory"
router.route("/GET").get(instructionsController.findAll);

router.route("/POST").post(instructionsController.create);

// Matches with "/api/inventory/:id"
router.route("/GET/:id").get(instructionsController.findById);
router.route("/POST/:id").post(instructionsController.update);
// .route("/inventory:id")
// .get(instructionsController.findById)
// .put(instructionsController.update)
// .delete(instructionsController.remove);

module.exports = router;
