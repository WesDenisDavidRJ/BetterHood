// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Event" model that matches up with DB



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


  // Syncs with DB
Event.sync();

// Makes the Event Model available for other files (will also create a table)
module.exports = Event;