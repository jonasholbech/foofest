const { observer } = require("./util/observer");
const { events } = require("./util/events");
class EventLog {
  constructor() {
    this.events = [];
    observer.subscribe(events.CANCELLATION, (evt) => this.add(evt));
  }
  add(evt) {
    this.events.push(evt);
  }
  getEvents() {
    const copy = [...this.events];
    this.events = [];
    return copy;
  }
}
module.exports = { EventLog };
