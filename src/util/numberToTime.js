function numberToTime(num) {
  if (String(num).length === 2) {
    return num + ":00";
  }
  return `0${num}:00`;
}

module.exports = { numberToTime };
