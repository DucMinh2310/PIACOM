const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Role = db.define(
  "role",
  {
    // Model attributes are defined here
    roleID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    permission: {
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

module.exports = Role;
