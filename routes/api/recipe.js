const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

// Matches with "/api/inventory"
router.route("/GET").get(recipeController.findAll);

router.route("/POST").post(recipeController.create);

// Matches with "/api/inventory/:id"
router.route("/GET/:id").get(recipeController.findById);
router.route("/POST/:id").post(recipeController.update);
// .route("/inventory:id")
// .get(recipeController.findById)
// .put(recipeController.update)
// .delete(recipeController.remove);

module.exports = router;
