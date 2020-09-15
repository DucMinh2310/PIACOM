const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Contract = db.define(
  "contracts",
  {
    // Model attributes are defined here
    contractID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    clientID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "active",
    },
  },
  {
    timestamps: false,
    charset: "utf8",
    collate: "utf8_unicode_520_ci",
  }
);

module.exports = Contract;
