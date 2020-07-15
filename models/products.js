module.exports = function(sequelize, DataTypes) {
    var Products = sequelize.define("products", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
        },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        defaultValue: "Dogs"
      }
    });
    return Products;
  };
  