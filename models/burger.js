module.exports = (sequelize, DataTypes) => {
    let Burger = sequelize.define("burger", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    });
    return Burger;
};