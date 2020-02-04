const Sequelize = require("sequilize");

const sequellize = new Sequelize("burgers_db", "cassquatch", "mrmeseekslookatme101!", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;
