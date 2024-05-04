const bands = require("./static/bands.json");
const { shuffle } = require("./util/shuffle");
const { numberToTime } = require("./util/numberToTime");
const { rndBetween, rndBetweenEven } = require("./util/rnd");
const { observer } = require("./util/observer");
const { events } = require("./util/events");
class Schedule {
  constructor(fest) {
    //TODO: ? flatten array and add stage/day?
    this.fest = fest;
    this.scenes = ["Midgard", "Vanaheim", "Jotunheim"];
    this.days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    this.slots = {};
    this.scenes.forEach((scene) => {
      this.slots[scene] = this._setEmptyStage();
    });
    this.fillSlots();
    this.tick.bind(this);
    observer.subscribe(events.TICK, () => this.tick());
  }

  tick() {
    if (Math.random() * 100 < this.fest.eventChance) {
      const scene = this.scenes[rndBetween(0, this.scenes.length - 1)];
      const day = this.days[rndBetween(0, this.days.length - 1)];
      const slot = rndBetweenEven(0, 10);
      if (!this.slots[scene][day][slot].cancelled) {
        this.slots[scene][day][slot].cancelled = true;
        observer.publish(events.CANCELLATION, {
          scene,
          day,
          act: this.slots[scene][day][slot],
        }); //TODO args, which event
        this.slots[scene][day][slot].cancelled = true;
      }
    }
  }
  _setEmptyStage() {
    const temp = {
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    };
    return temp;
  }
  /* _getMembers() {
    let members = [];
    const amount = Math.floor(Math.random() * 4);
    for (let i = 0; i < amount; i++) {
      members.push(faker.name.firstName() + " " + faker.name.lastName());
    }
    return members;
  } */
  fillSlots() {
    const copy = bands.map((band) => band.name);
    let start = copy.length;
    /* for (; start < 6 * 7 * 3; start++) {
      copy.push(faker.company.companyName());
    } */
    shuffle(copy);
    this._fillStage(this.scenes[0], copy.slice(0, 42));
    this._fillStage(this.scenes[1], copy.slice(42, 84));
    this._fillStage(this.scenes[2], copy.slice(84, 126));
  }
  _fillStage(stage, acts) {
    this.slots[stage].mon = this._addBreaks(acts.slice(0, 6));
    this.slots[stage].tue = this._addBreaks(acts.slice(6, 12));
    this.slots[stage].wed = this._addBreaks(acts.slice(12, 18));
    this.slots[stage].thu = this._addBreaks(acts.slice(18, 24));
    this.slots[stage].fri = this._addBreaks(acts.slice(24, 30));
    this.slots[stage].sat = this._addBreaks(acts.slice(30, 36));
    this.slots[stage].sun = this._addBreaks(acts.slice(36, 42));

    //console.dir(this.slots);
  }
  _addBreaks(acts) {
    const nextActs = [];
    let start = 0;
    acts.forEach((act) => {
      nextActs.push({
        start: numberToTime(start),
        end: numberToTime(start + 2),
        act: act,
      });
      nextActs.push({
        start: numberToTime(start + 2),
        end: numberToTime(start + 4),
        act: "break",
      });
      start += 4;
    });
    return nextActs;
  }
}
module.exports = { Schedule };
