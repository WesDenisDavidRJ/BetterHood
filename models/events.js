module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      descrip: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      lat: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      lon: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        len: [1]
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      category: {
        type: DataTypes.STRING,
        defaultValue: "General Assistance"
      }
    });
    return Event;
  };