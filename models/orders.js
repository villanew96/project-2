module.exports = function(sequelize, DataTypes) {
    var Orders = sequelize.define("orders", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      products: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_price: {
        type:DataTypes.DECIMAL(10,2),
        allowNull: false,
      },
      placed_order: {
        type: DataTypes.BOOLEAN,
      },
      in_transit: {
        type: DataTypes.BOOLEAN,
      },
      completed: {
        type: DataTypes.BOOLEAN,
      },
      
    });
    return Orders;
  };