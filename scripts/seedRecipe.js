module.exports = seedRecipe = (invArray, equipArray) => {

  return recipeSeed = [
    {
      name: "Birthday Cake",

      description:
        "A yellow cake with chocolate buttercream frosting and colorful sprinkles",

      steps: [
        {
          directions:
            "Place all dry ingredient in bowl; mix with whisk until thoroughly combined.",
          stepInventory: [
            { inventory: invArray[0], quantity: 2 },
            { inventory: invArray[1], quantity: 1 },
            { inventory: invArray[2], quantity: 3 }
          ],
          equipmentType: [equipArray[0], equipArray[1]],
          duration: 0.083
        },

        {
          directions:
            "Place all wet ingredient in bowl; mix with whisk until thoroughly combined.",
          stepInventory: [
            { inventory: invArray[3], quantity: 1 },
            { inventory: invArray[4], quantity: 2 },
            { inventory: invArray[5], quantity: 3 }
          ],
          equipmentType: [equipArray[0], equipArray[1]],
          duration: 0.083
        }
      ]
    }
  ];
}