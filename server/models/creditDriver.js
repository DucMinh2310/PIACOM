const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Credit_driver = db.define(
  "credit_driver",
  {
    // Model attributes are defined here
    driverID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contractID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creditLimit: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    creditRemain: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
    charset: "utf8",
    collate: "utf8_unicode_520_ci",
  }
);

module.exports = Credit_driver;
