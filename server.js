const express = require("express");
const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require("morgan")
// Initialize Express
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");
//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const apiRoutes = require("./routes/API");

// Configure middleware
    // Use morgan
    app.use(logger("dev"));
    // Use body parser
    app.use(bodyParser.json());
    // Use cors
    app.use(cors());

// Static directory
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Routes
// =============================================================
require("./routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});