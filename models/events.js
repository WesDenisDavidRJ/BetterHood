module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
      Description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      Address: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      Date: {
        type: DataTypes.DATE,
        allowNull: false,
        len: [1]
      },
      Image: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      category: {
        type: DataTypes.STRING,
        defaultValue: "Construction"
      }
    });
    return Event;
  };