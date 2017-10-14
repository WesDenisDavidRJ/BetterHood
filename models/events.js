// //File should eb able to be deleted but will check with group before doing the final delete

// //
// // module.exports = function(sequelize, Sequelize) {
// // =======
// var Sequelize = require("sequelize");

// module.exports = function(sequelize, DataTypes) {
// // >>>>>>> master
//     var Event = sequelize.define("Event", {
//       name: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       descrip: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       address: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         len: [1]
//       },
//       lat: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         len: [1]
//       },
//       lon: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         len: [1]
//       },
//       date: {
//         type: Sequelize.DATE,
//         allowNull: false,
//         len: [1]
//       },
//       image: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         len: [1]
//       },
//       zipcode: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         len: [1]
//       },
//       category: {
//         type: Sequelize.STRING,
//         defaultValue: "General Assistance"
//       }
//     });
//     return Event;
//   };