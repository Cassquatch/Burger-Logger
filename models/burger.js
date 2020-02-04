const Sequelize = require("sequelize");

const sequelize = require("../config/connection.js");

const Burger = sequelize.define("burger", {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
});

Burger.sync();

module.exports = Burger;