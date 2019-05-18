/* eslint-disable curly */
const db = require("../models");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Defining methods for the UsersController
module.exports = {
  validateToken: function(req, res) {
    return jwt.verify(req.body.token, "shhhhh", function(err, decoded) {
      if (err) {
        return res.status(400).send({ msg: "yo token is bad!" });
      }
      return res.status(200).send({ msg: "yo token is good!" });
    });
  },

  login: function(req, res) {
    db.User.findOne({ email: req.body.email }).then(u => {
      if (!u) res.status(400).send({ msg: "Invalid Email or Password" });

      bcrypt.compare(req.body.password, u.password, function(err, bRes) {
        if (!bRes) res.status(400).send({ msg: "Invalid Email or Password" });
        var token = jwt.sign({ email: u.email }, "shhhhh");
        res.json({ email: u.email, token: token });
      });
    });
  },

  signup: function(req, res) {
    db.User.findOne({ email: req.body.email }).then(u => {
      if (u) res.status(400).send({ msg: "Invalid Email or Password" });

      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
          db.User.create({
            email: req.body.email,
            password: hash
          }).then(function(user) {
            var token = jwt.sign({ email: user.email }, "shhhhh");
            res.json({ email: user.email, token: token });
          });
        });
      });
    });
  },

  test: function(req, res) {
    users = {
      a: "A",
      b: "B",
      c: "C"
    };

    res.status(200).json(users).end();
  }
};
