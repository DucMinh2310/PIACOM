const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define(
  "user",
  {
    // Model attributes are defined here
    loginID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleID: {
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

module.exports = User;
