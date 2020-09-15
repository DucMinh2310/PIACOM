const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Client = db.define(
  "client",
  {
    // Model attributes are defined here
    clientID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    taxID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    max_payment_limit: {
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

module.exports = Client;
