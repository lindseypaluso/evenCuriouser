const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { join } = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const socket = require("socket.io");

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "build")));

// Routes
// const apiRoutes = require("./routes/API");

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
// require("./routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

const server = app.listen(port, () => console.log(`API Server listening on port ${port}`));

const io = socket(server);

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("SEND_MESSAGE", function(data){
    io.emit("RECEIVE_MESSAGE", data);
  })
});
