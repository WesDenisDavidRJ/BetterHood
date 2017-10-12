var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    app.get("/register", function(req, res) {
        res.sendFile(path.join(__dirname, "../routes/public/register.html"));
      });

      app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
      });

      app.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

      app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
      });


     

}