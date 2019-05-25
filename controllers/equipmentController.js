const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Equipment.find(req.query)
      .sort({
        date: -1
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Equipment.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByType: function (req, res) {
    db.Equipment.findOne({
        where: {
          equipmentType: req.params.type
        }
      }).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {

    // Check for equipment type
    db.Equipment.findOne({
      equipmentType: req.body.equipmentType
    }, (err, doc) => {
      if (err) {
        return res.status(422).json(err);
      }

      // New equipment type
      if (!doc) {
        db.Equipment.create({
          equipmentType: req.body.equipmentType,
          equipment: [{
            name: req.body.name
          }]
        }, (err, doc) => {

          if (err) {
            return res.status(422).json(err)
          }

          res.json(doc);

        })
      } 
      //Equipment type exists
      else {
        db.Equipment.updateOne({
          equipmentType: req.body.equipmentType
        }, {
          $push: {
            equipment: {
              name: req.body.name
            }
          }
        }, {

        }, (err, doc) => {

          if (err) {
            return res.status(422).json(err)
          }

          res.json(doc);

        })
      }

    })
  },

  update: function (req, res) {
    db.Equipment.findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Equipment.findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};