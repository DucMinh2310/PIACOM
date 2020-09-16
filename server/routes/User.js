const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/new", (req, res) => {
  User.create({
    userID: req.body.userID,
    username: req.body.username,
    password: req.body.password,
    roleID: req.body.roleID,
  })
    .then((newlyUser) => {
      res.send(newlyUser);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
