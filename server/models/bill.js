const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Bill = db.define(
  "bill",
  {
    // Model attributes are defined here
    billID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    driverID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stationID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    total: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    transactionDate: {
      type: DataTypes.DATE,
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

module.exports = Bill;
