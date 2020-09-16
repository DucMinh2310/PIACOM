const express = require("express");
const router = express.Router();
const GasStation = require("../models/gasStation");

router.post("/new", (req, res) => {
  GasStation.create({
    gasStationID: req.body.gasStationID,
    name: req.body.name,
    location: req.body.location,
    address: req.body.address,
    workingTime: req.body.workingTime,
  })
    .then((newlyGasStation) => {
      res.send(newlyGasStation);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
