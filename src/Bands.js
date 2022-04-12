//var faker = require("faker");
const Bands = require("./static/bands.json");
//var random = require("just-random-integer");
//const { initialSettings } = require("./static/settings");

//const numBands = 6 * 7 * 3;
const copy = [...Bands];
/* let start = Bands.length;
const imageTypes = [
  "abstract",
  "animals",
  "nightlife",
  "fashion",
  "food",
  "nature",
  "people",
];
for (; start < numBands; start++) {
  const band = {
    name: faker.company.companyName(),
    members: getMembers(),
    genre: faker.music.genre(),
    logo: faker.image[imageTypes[random(0, imageTypes.length - 1)]](
      initialSettings.imageWidth,
      initialSettings.imageHeight,
      true
    ),
    bio: faker.lorem.paragraphs(),
  };
  copy.push(band);
}

function getMembers() {
  const members = [];
  for (let i = 0; i < random(1, 5); i++) {
    members.push(`${faker.name.firstName()} ${faker.name.lastName()}`);
  }
  return members;
} */

module.exports = copy;
