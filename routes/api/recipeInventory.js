const router = require("express").Router();
const recipeInventoryController = require("../../controllers/recipeInventoryController");

// Matches with "/api/inventory"
router.route("/GET").get(recipeInventoryController.findAll);

router.route("/POST").post(recipeInventoryController.create);

// Matches with "/api/inventory/:id"
router.route("/GET/:id").get(recipeInventoryController.findById);
router.route("/POST/:id").post(recipeInventoryController.update);
// .route("/inventory:id")
// .get(inventoryController.findById)
// .put(inventoryController.update)
// .delete(inventoryController.remove);

module.exports = router;
