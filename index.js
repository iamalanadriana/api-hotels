const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
const hotelsRouter = require('./routes/views/hotels');
const hotelsApiRouter = require('./routes/api/hotels')
const config = require('./config/index')

// app
const app = express();

// middlewares
app.use(bodyParser.json())

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// routes
app.use("/hotels", hotelsRouter);
app.use("/api/hotels", hotelsApiRouter)

// redirect
app.get('/', function(req, res) {
  res.redirect('/hotels')
})

// server
const server = app.listen(config.config.port, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});
