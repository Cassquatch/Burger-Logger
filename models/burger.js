module.exports = (sequelize, DataTypes) => {
    let Burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured: { 
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }
    });
    return Burger;
};