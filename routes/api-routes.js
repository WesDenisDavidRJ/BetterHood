
var db = require("../models");
module.exports = function(app) {

    app.get("/api/users/", function(req, res) {
        db.User.findAll({})
        .then(function(dbUser) {
          res.json(dbUser);
        });
      });

    app.get("/api/events/", function(req, res) {
        db.Event.findAll({})
        .then(function(dbEvent) {
          res.json(dbEvent);
        });
      });

var accountSid = 'AC7e4e81cff80cf1d86872f2066ec1c675'; // Your Account SID from www.twilio.com/console
var authToken = '572ee0ec91e3ff8e029b57e7b0a3ab71';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

app.get("/api/register", function(req, res) {
    res.json(tableData);
  });

  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/events", function(req, res) {
    console.log(req.body);
    db.Event.create({
      Description: req.body.Description,
      Address: req.body.Address,
      Date: req.body.Date,
      Image: req.body.Image,
      Category: req.body.Category,
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });





app.post("/api/register", function(req, res) {
    console.log(req.body);
    client.messages.create({
     body: 'Hello from David',
     to: '+1'+req.body.phoneNumber,  // Text this number
     from: '+19197525090' // From a valid Twilio number
    }, function(err, message){
        if (err) {
            console.log(err);
        } else {
            console.log(message.sid)
        }
        
        });
    })
}