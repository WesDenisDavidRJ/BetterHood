//File not necessare can be deleted per groups approval

// var bcrypt = require("bcrypt-nodejs");
// // Dependencies
// // =============================================================

// // Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references my connection to the DB.
// var sequelize = require("../config/connection.js");

// // Creates a "Event" model that matches up with DB

// //Wes Update


//     var EventModel = sequelize.define("event", {
//       name: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       description: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       address: {
//         type: Sequelize.STRING,
//         allowNull: true,
//         len: [1]
//       },
//       lat: {
//         type: Sequelize.STRING,
//         allowNull: true,
//         len: [1]
//       },
//       lon: {
//         type: Sequelize.STRING,
//         allowNull: true,
//         len: [1]
//       },
//       date: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         len: [1]
//       },
//       image: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         len: [1]
//       },
//       category: {
//         type: Sequelize.STRING,
//         defaultValue: "General Assistance"
//       }
//     });

// //Differnt color ??
//   // Syncs with DB
// EventModel.sync();

// // Makes the EventModel Model available for other files (will also create a table)
// module.exports = EventModel;