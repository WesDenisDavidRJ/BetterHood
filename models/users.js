module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      phone: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      Events: {
        type: DataTypes.Enum,
        allowNull: true,
        len: [1]
      },
      
    });
    return User;
  };