const router = require("express").Router();
const orderController = require("../../controllers/orderController");

// Matches with "/api/inventory"
router.route("/GET").get(orderController.findAll);

router.route("/POST").post(orderController.create);

// Matches with "/api/inventory/:id"
router.route("/GET/:id").get(orderController.findById);
router.route("/POST/:id").post(orderController.update);
// .route("/inventory:id")
// .get(orderController.findById)
// .put(orderController.update)
// .delete(orderController.remove);

module.exports = router;
