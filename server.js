/* eslint-env node, es6 */
const express = require("express");
const bodyParser = require("body-parser");
var app = express();
//app.use(express.json());
//app.use(express.urlencoded());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS"); //OPTIONS
  next();
});
const { FooFest } = require("./src/foofest");

app.get("/bands", function (req, res) {
  res.json(FooFest.bands);
});
app.get("/schedule", function (req, res) {
  res.json(FooFest.schedule);
});
//TODO: day or stage
app.get("/schedule/:day", function (req, res) {
  const day = parseInt(req.params.day);
  res.json(FooFest.schedule);
});
app.get("/events", function (req, res) {
  res.json(FooFest.eventLog.getEvents());
});
app.get("/available-slots", function (req, res) {
  res.json(FooFest.booking.getData());
});
//reservation duration: //TODO:
app.post("/settings", function (req, res) {
  const structure = req.body;
  if (structure.eventFrequency) {
    FooFest.setEventFrequency(structure.eventFrequency);
  }
  if (structure.eventChance) {
    FooFest.setEventChance(structure.eventChance);
  }
  if (!structure.eventFrequency && !structure.eventChance) {
    res.send({
      error:
        "Wrong data format supplied, need 'eventFrequency' or 'eventChance'",
      status: 500,
    });
  } else {
    res.send({
      message: "Changed settings",
    });
  }
});

app.put("/reserve-spot", function (req, res) {
  res.send(FooFest.booking.reserveSpot(req.body.area, req.body.amount));
});

app.post("/fullfill-reservation", function (req, res) {
  res.send(FooFest.booking.fullfillReservation(req.body.id));
});

app.listen(process.env.PORT || 3000);
