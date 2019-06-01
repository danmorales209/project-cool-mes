module.exports = seedOrder = (recipeInv) => {

  return [
    {
      product: recipeInv[0],
      productName: "Birthday Cake",
      status: "New",
      priority: 0,
      customer:
      {
        name: "Joe Jones",
        address: "45 Caroline Blvd.",
        city: "Sacramento",
        state: "California",
        zip: 95824
      },
      dueDate: "2019-06-11",
      qtyNeeded: 4
    }
  ];
};

