const Sequelize = require("sequelize");

const db = require("../config/connection.js");

const Burger = db.define("burger", {
    burger_name: Sequelize.STRING,
    devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue : 0
    }
});
 Burger.sync();

module.exports = Burger;