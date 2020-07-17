module.exports = function(sequelize, DataTypes) {
    var Products = sequelize.define("products", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type:DataTypes.DECIMAL(10,2),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      
    });
    return Products;
  };
  