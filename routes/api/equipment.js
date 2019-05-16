const router = require("express").Router();
const equipmentController = require("../../controllers/equipmentController");

// Matches with "/api/equipment"
router.route("/GET").get(equipmentController.findAll);
router.route("/POST").post(equipmentController.create);

// Matches with "/api/equipment/:id"
router.route("/GET/:id").get(equipmentController.findById);
router.route("/POST/:id").post(equipmentController.update);
// .route("/equipment:id")
// .get(equipmentController.findById)
// .put(equipmentController.update)
// .delete(equipmentController.remove);

module.exports = router;
