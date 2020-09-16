const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Credit_client = db.define(
  "credit_client",
  {
    // Model attributes are defined here
    contractID: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    debtCeiling: {
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

module.exports = Credit_client;
