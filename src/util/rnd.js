function rndBetween(min, max) {
  return Math.floor(
    Math.random() * (Number(max) - Number(min) + 1) + Number(min)
  );
}
function rndBetweenEven(min, max) {
  const number = Math.floor((Math.random() * max) / 2) * 2 + min;
  return number;
}
module.exports = { rndBetween, rndBetweenEven };
