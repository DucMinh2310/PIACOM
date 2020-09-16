const express = require("express");
const router = express.Router();
const GasStation = require("../models/gasStation");

router.post("/gasstation", (req, res) => {
  GasStation.create({
    stationID: req.body.stationID,
    name: req.body.name,
    address: req.body.address,
    location: req.body.location,
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
