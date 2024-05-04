//var faker = require("faker");
const Bands = require("./static/bands.json");
//const { initialSettings } = require("./static/settings");

//const numBands = 6 * 7 * 3;
const copy = [...Bands];
/* function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim leading/trailing white space
  str = str.toLowerCase(); // convert string to lowercase
  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
  return str;
}
const copy = Bands.map((b) => {
  return {
    ...b,
    slug: slugify(b.name),
  };
}); */

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
