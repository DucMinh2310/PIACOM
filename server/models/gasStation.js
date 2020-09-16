const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const GasStation = db.define(
  "gas_station",
  {
    // Model attributes are defined here
    gasStationID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    workingTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    charset: "utf8",
    collate: "utf8_unicode_520_ci",
  }
);

module.exports = GasStation;
