const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Driver = db.define(
  "driver",
  {
    // Model attributes are defined here
    driverID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    clientID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    residentID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
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

module.exports = Driver;
