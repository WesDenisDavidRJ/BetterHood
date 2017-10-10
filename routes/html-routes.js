var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    app.get("/register", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/register.html"));
      });

     

}