var bcrypt = require("bcrypt-nodejs");

// Dependencies 
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "User" model that matches up with DB

//Wes Update



    var User = sequelize.define("newuser", {
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      userEmail: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      phone: {
        type: Sequelize.TEXT,
        allowNull: false,
        len: [1]
      },
      userPassword: {
        type: Sequelize.TEXT,
        allowNull: false,
        len: [1]
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "admin@betterhood.org",
        len: [1]
      },
      events: {
        type: Sequelize.STRING,
        allowNull: true,
        len: [1]
      },
      userDescrip: {
        type: Sequelize.STRING,
        allowNull: true,
        len: [1]
      },
      
    });

// Syncs with DB
User.sync();

// Makes the User Model available for other files (will also create a table)
module.exports = User;