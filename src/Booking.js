var uniqid = require("uniqid");
const { observer } = require("./util/observer");
const { rndBetween } = require("./util/rnd");
class Booking {
  constructor(fest) {
    this.fest = fest;
    this.timeoutIds = [];
    this.areas = [
      {
        area: "Svartheim",
        slots: 400,
        available: rndBetween(0, 400),
        direction: -1,
      },
      {
        area: "Nilfheim",
        slots: 300,
        available: rndBetween(0, 300),
        direction: -1,
      },
      {
        area: "Helheim",
        slots: 100,
        available: rndBetween(0, 100),
        direction: -1,
      },
      {
        area: "Muspelheim",
        slots: 200,
        available: rndBetween(0, 200),
        direction: -1,
      },
      {
        area: "Alfheim",
        slots: 250,
        available: rndBetween(0, 250),
        direction: -1,
      },
    ];
    //sell out random area
    const areaIndex = rndBetween(0, this.areas.length - 1);
    this.areas[areaIndex].available = 0;
    this.areas[areaIndex].direction = 1;
    this.tick.bind(this);
    observer.subscribe("TICK", () => this.tick());
  }
  getData() {
    //TODO: remove direction from output
    return this.areas;
  }
  reserveSpot(area, amount) {
    const thisArea = this.areas.filter((a) => a.area === area)[0];
    if (thisArea && thisArea.available >= amount) {
      thisArea.available -= amount;
      const timeoutId = setTimeout(() => {
        thisArea.available += amount;
      }, 60000);
      const id = uniqid();
      this.timeoutIds.push({
        clearCallback: timeoutId,
        id: id,
        area: thisArea,
        amount,
      });
      return {
        message: "Reserved",
        id,
        timeout: this.fest.reservationDuration,
      };
    } else {
      return {
        error: "Invalid area or not enough available spots",
        status: 500,
      };
    }
  }

  fullfillReservation(id) {
    const objId = this.timeoutIds.findIndex((e) => e.id === id);
    if (objId !== -1) {
      clearTimeout(this.timeoutIds[objId].clearCallback);
      this.timeoutIds.splice(objId, 1);
      return { message: "Reservation completed" };
    } else {
      return {
        message: "ID not found",
        status: 500,
      };
    }
  }
  tick() {
    if (Math.random() * 100 < this.fest.eventChance) {
      const areaIndex = rndBetween(0, this.areas.length - 1);
      this.areas[areaIndex].available += this.areas[areaIndex].direction;
      if (this.areas[areaIndex].available === 0) {
        this.areas[areaIndex].direction = 1;
      } else if (this.areas[areaIndex].available > 20) {
        this.areas[areaIndex].direction = -1;
      }
      /* console.log(
        this.areas.map((a) => a.area + ": " + a.available).join("\n")
      ); */
    }
  }
}
module.exports = { Booking };
