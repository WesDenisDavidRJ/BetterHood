module.exports = function(app) {


var accountSid = 'AC7e4e81cff80cf1d86872f2066ec1c675'; // Your Account SID from www.twilio.com/console
var authToken = '572ee0ec91e3ff8e029b57e7b0a3ab71';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

app.get("/api/register", function(req, res) {
    res.json(tableData);
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
// })
// .then((message) => console.log(message.sid, message.to))
// })

}