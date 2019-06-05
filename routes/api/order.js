const router = require("express").Router();
const orderController = require("../../controllers/orderController");

// Matches with "/api/inventory"
router.route("/GET").get(orderController.findAll);

router.route("/POST").post(orderController.create);

// Matches with "/api/inventory/:id"
router.route("/GET/:id").get(orderController.findById);
router.route("/POST/:id").post(orderController.update);
router.route("/CHECK").post(orderController.check);
router.route("/DELETE/:id").post(orderController.remove);
router.route("/PUT/:id").put(orderController.updateSteps);
// .route("/inventory:id")
// .get(orderController.findById)
// .put(orderController.update)
// .delete(orderController.remove);

module.exports = router;
