module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("users", {
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
      password: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
          type: DataTypes.STRING,
          allowNull: false,
      }
    });
    return Users;
  };

//   CREATE TABLE users (
//     id INT AUTO_INCREMENT,
//     name VARCHAR(255) NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     type VARCHAR(255) NOT NULL,
//     address VARCHAR(255) NOT NULL,
//     PRIMARY KEY (id)
// );