const router = require("express").Router();
const inventoryController = require("../../controllers/inventoryController");

// Matches with "/api/inventory"
router.route("/GET").get(inventoryController.findAll);

router.route("/POST").post(inventoryController.create);

// Matches with "/api/inventory/:id"
router.route("/GET/:id").get(inventoryController.findById);
router.route("/POST/:id").post(inventoryController.update);
// .route("/inventory:id")
// .get(inventoryController.findById)
// .put(inventoryController.update)
// .delete(inventoryController.remove);

module.exports = router;
