const { observer } = require("./util/observer");
const { events } = require("./util/events");
const { initialSettings } = require("./static/settings");
class Festival {
  constructor(name) {
    this.name = name;
    this.eventFrequency = initialSettings.eventFrequency;
    this.eventChance = initialSettings.eventChance;
    this.reservationDuration = initialSettings.reservationDuration;
    this.running = false;
  }
  start() {
    this.running = true;
    this.tick();
  }
  setEventChance(chance) {
    this.eventChance = chance;
  }
  setEventFrequency(freq) {
    if (Number(freq) < 2) {
      throw "Frequency too low (2 is minimum)";
    }
    this.eventFrequency = Number(freq);
  }
  setReservationDuration(duration) {
    this.reservationDuration = duration;
  }
  tick() {
    observer.publish(events.TICK);
    setTimeout(this.tick.bind(this), this.eventFrequency * 1000);
  }
}

module.exports = { Festival };
