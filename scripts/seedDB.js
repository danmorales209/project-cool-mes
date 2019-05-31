const path = "mongodb://localhost/mesData";

const orderSeeds = require("./seedOrder")
const recipeSeeds = require("./seedRecipe")
const inventorySeeds = require("./seedInventory")
const equipmentSeeds = require("./seedEquipment")

mongoose.connect(
    path,
    { useNewUrlParser: true }
);


db.Inventory.removeMany({})
    .then(() => db.Inventory.collection.insertMany(inventorySeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

