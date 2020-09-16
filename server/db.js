const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

module.exports = sequelize;

// Associations

const User = require("./models/user");
const Role = require("./models/role");
const Product = require("./models/product");
const GasStation = require("./models/gasStation");
const CreditClient = require("./models/creditClient");
const Driver = require("./models/driver");
const Contract = require("./models/contract");
const Client = require("./models/client");
const Bill = require("./models/bill");

Role.hasMany(User, {
  foreignKey: { name: "roleID", allowNull: false },
  onDelete: "CASCADE",
});
User.belongsTo(Role, {
  foreignKey: { name: "roleID", allowNull: false },
  onDelete: "CASCADE",
});

// =====================================================
User.hasOne(Driver, {
  foreignKey: { name: "driverID", allowNull: false },
  onDelete: "CASCADE",
});
Driver.belongsTo(User, {
  foreignKey: { name: "driverID", allowNull: false },
  onDelete: "CASCADE",
});

// =====================================================
User.hasOne(Client, {
  foreignKey: { name: "clientID", allowNull: false },
  onDelete: "CASCADE",
});
Client.belongsTo(User, {
  foreignKey: { name: "clientID", allowNull: false },
  onDelete: "CASCADE",
});

// =====================================================
User.hasOne(GasStation, {
  foreignKey: { name: "gasStationID", allowNull: false },
  onDelete: "CASCADE",
});
GasStation.belongsTo(User, {
  foreignKey: { name: "gasStationID", allowNull: false },
  onDelete: "CASCADE",
});
// =====================================================
Driver.hasMany(Bill, {
  foreignKey: { name: "driverID", allowNull: false },
  onDelete: "CASCADE",
});
Bill.belongsTo(Driver, {
  foreignKey: { name: "driverID", allowNull: false },
  onDelete: "CASCADE",
});

// =====================================================
Driver.belongsToMany(Contract, {
  through: "credit_drivers",
  foreignKey: { name: "driverID" },
});
Contract.belongsToMany(Driver, {
  through: "credit_drivers",
  foreignKey: { name: "contractID" },
});

// =====================================================
Client.hasMany(Driver, {
  foreignKey: { name: "clientID", allowNull: false },
  onDelete: "CASCADE",
});
Driver.belongsTo(Client, {
  foreignKey: { name: "clientID", allowNull: false },
  onDelete: "CASCADE",
});

// =====================================================
Client.hasMany(Bill, {
  foreignKey: { name: "clientID", allowNull: false },
  onDelete: "CASCADE",
});
Bill.belongsTo(Client, {
  foreignKey: { name: "clientID", allowNull: false },
  onDelete: "CASCADE",
});

// =====================================================
Client.hasMany(Contract, {
  foreignKey: { name: "clientID", allowNull: false },
  onDelete: "CASCADE",
});
Contract.belongsTo(Client, {
  foreignKey: { name: "clientID", allowNull: false },
  onDelete: "CASCADE",
});

// =====================================================
Client.hasMany(CreditClient, {
  foreignKey: { name: "clientID", allowNull: false },
  onDelete: "CASCADE",
});
CreditClient.belongsTo(Client, {
  foreignKey: { name: "clientID", allowNull: false },
  onDelete: "CASCADE",
});

// =====================================================
Contract.hasOne(CreditClient, {
  foreignKey: { name: "contractID", allowNull: false },
  onDelete: "CASCADE",
});
CreditClient.belongsTo(Contract, {
  foreignKey: { name: "contractID", allowNull: false },
  onDelete: "CASCADE",
});

// =====================================================
GasStation.hasMany(Bill, {
  foreignKey: { name: "gasStationID", allowNull: false },
  onDelete: "CASCADE",
});
Bill.belongsTo(GasStation, {
  foreignKey: { name: "gasStationID", allowNull: false },
  onDelete: "CASCADE",
});

// =====================================================
Product.hasMany(Bill, {
  foreignKey: { name: "productID", allowNull: false },
  onDelete: "CASCADE",
});
Bill.belongsTo(Product, {
  foreignKey: { name: "productID", allowNull: false },
  onDelete: "CASCADE",
});
