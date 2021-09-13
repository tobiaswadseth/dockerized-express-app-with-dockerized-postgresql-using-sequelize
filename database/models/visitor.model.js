module.exports = (sequelize, DataTypes) => {
    const Visitor = sequelize.define("visitor", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        visits: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
    });

    return Visitor;
}