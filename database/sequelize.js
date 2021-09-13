const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DB, process.env.DBUSER, process.env.DBPASS, {
    host: process.env.DBURL,
    port: process.env.DBPORT,
    dialect: "postgres",
    logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.visitor = require("./models/visitor.model")(sequelize, DataTypes);

module.exports = db;