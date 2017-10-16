var EventModel = require("../models/newEvents.js");
var User = require("../models/newUser.js")
var db = require("../models");
var passport = require("../config/passport")
var accountSid = 'AC7e4e81cff80cf1d86872f2066ec1c675'; // Your Account SID from www.twilio.com/console
var authToken = '572ee0ec91e3ff8e029b57e7b0a3ab71';   // Your Auth Token from www.twilio.com/console
var twilio = require('twilio');
const GoogleAuth = require('google-auth-library');

module.exports = function(app) {

    app.get("/api/users/", function(req, res) {
        db.User.findAll({})
        .then(function(dbUser) {
          res.json(dbUser);
        });
      });

    app.get("/api/events/", function(req, res) {
      //find event by category
    EventModel.findAll({
      where: {
        category: req.query.category
      }
    }).then(function(results) {
      res.json(results);
    });
      });

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/loginPage", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/index");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });


var client = new twilio(accountSid, authToken);

app.get("/api/register", function(req, res) {
    res.json(tableData);
  });




// Add a user Wes update 
  app.post("/api/events", function(req, res) {
    console.log("New Event:");
    console.log(req.body);
    EventModel.create({
      name: req.body.name,
      description: req.body.description,
      address: req.body.address,
      lat: req.body.lat,
      lon: req.body.lon,
      date: req.body.date,
      image: req.body.image,
      category: req.body.category,
    })
    .then(function(results) {
      res.json(results);
    });
  });

   // Add a user Wes update 
  app.post("/api/users", function(req, res) {
    console.log("New User:");
    console.log(req.body);
    User.create({
      phone: req.body.phone,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userEmail: req.body.userEmail,
      userPassword: req.body.userPassword,
      userDescrip: req.body.Descrip
    }).then(function(results) {
      res.json(results);
    });
    client.messages.create({
      body: `Hello from BetterHood.org.  Thank you for registering.  Your password is ${req.body.userPassword}`,
      to: '+1'+req.body.phone,  // Text this number
      from: '+19197525090' // From a valid Twilio number
     }, function(err, message){
         if (err) {
             console.log(err);
         } else {
             console.log(message.sid)
         }
         
         });
  });

    // Get all event of a specific genre
  function getEventByCategory(category, res) {
    Event.findAll({
      where: {
        category: category
      }
    }).then(function(results) {
      res.json(results);
    });
  };

app.post("/api/users", function(req, res) {
    console.log(req.body);
    client.messages.create({
     body: `Hello from BetterHood.org.  The event you signed your information ${req.body}`,
     to: '+1'+req.body.phoneNumber,  // Text this number
     from: '+19197525090' // From a valid Twilio number
    }, function(err, message){
        if (err) {
            console.log(err);
        } else {
            console.log(message.sid)
        }
        
        });
    });

    // GAUTHSOME: Verify the logged-in Google user using the google-auth-library NPM package.
    app.get('/api/auth', (req, res) => {
      console.log('Attempting to auth');
      const GOOGLE_CLIENT_ID = '495769109297-e2mgpt6k8ca1u9r8n248tombmr1egva1.apps.googleusercontent.com';
      const auth = new GoogleAuth;
      const client = new auth.OAuth2(GOOGLE_CLIENT_ID, '', '');
      client.verifyIdToken(
        req.query.token,
        GOOGLE_CLIENT_ID,
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
        function (error, login) {
          if (error) {
            console.error(error);
  
            res.json({ error: error.message });
            return;
          }
  
          const payload = login.getPayload();
          payload.valid = true;
  
          res.json(payload);
        });
  
    });
  
};