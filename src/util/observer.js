const observer = (function () {
  "use strict";
  const events = {};
  return {
    subscribe: function (ev, callback) {
      if (!events.hasOwnProperty(ev)) {
        events[ev] = [];
      }
      events[ev].push(callback);
    },
    publish: function (ev) {
      let data = Array.prototype.slice.call(arguments, 1);
      let index = 0;
      let length = 0;
      if (events.hasOwnProperty(ev)) {
        length = events[ev].length;
        for (; index < length; index++) {
          events[ev][index].apply(this, data);
        }
      }
    },
    unsubscribe: function (ev, callback) {
      let x = events[ev].indexOf(callback);
      events[ev].splice(x, 1);
    },
  };
})();

module.exports = { observer };
