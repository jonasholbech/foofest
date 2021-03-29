//====================
const version = "0.0.1";
//====================

const { Schedule } = require("./Schedule.js");
const { Festival } = require("./Festival.js");
const { EventLog } = require("./EventLog");
const { Booking } = require("./Booking");
const bands = require("./static/bands.json");
function createFest(name) {
  const fest = new Festival(name);
  fest.setEventFrequency(3);
  fest.setEventChance(90);
  const schedule = new Schedule(fest);
  fest.schedule = schedule.slots;
  fest.bands = bands;
  const eventLog = new EventLog();
  fest.eventLog = eventLog;
  fest.booking = new Booking(fest);
  fest.start();
  return fest;
}

const fest = createFest("FooFest");
module.exports = {
  FooFest: fest,
};
