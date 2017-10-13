var bcrypt = require("bcrypt-nodejs");
var Sequelize = require("sequelize");




















module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define("User", {
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
      email: {
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
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
        len: [1]
      },
      events: {
        type: Sequelize.STRING,
        allowNull: true,
        len: [1]
      },
      
    });
    return User;
  };