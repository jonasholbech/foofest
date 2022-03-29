var faker = require("faker");
const Bands = require("./static/bands.json");
var random = require("just-random-integer");
const { initialSettings } = require("./static/settings");

const numBands = 6 * 7 * 3;
const copy = [...Bands];
let start = Bands.length;
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
}
/*
{
    "name": "A Perfect Circle",
    "members": [
      "Maynard James Keenan",
      "Billy Howerdel",
      "James Iha",
      "Matt McJunkins",
      "Jeff Friedl"
    ],
    "genre": "Alternative rock",
    "logo-credits": "By Michael John Stinsman - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=15811084",
    "logo": "A_Perfect_Circle_Logo_2011_-_Michael_John_Stinsman_InvisibleStudio_Productions.png",
    "bio": "A Perfect Circle is an American rock supergroup formed in 1999 by guitarist Billy Howerdel and Tool vocalist Maynard James Keenan. A Perfect Circle has released four studio albums, the first three during the early 2000s: Mer de Noms, their debut album in 2000, and followed up by Thirteenth Step in 2003; then in 2004, Emotive—an album of radically re-worked cover songs. Shortly after Emotive's release, the band went on hiatus; Keenan returned to Tool and started up solo work under the band name Puscifer. and Howerdel released a solo album, Keep Telling Myself It's Alright, under the moniker Ashes Divide. Band activity was sporadic in the following years; the band reformed in 2010, and played live shows on and off between 2010 and 2013, but fell into inactivity after the release of their greatest hits album, Three Sixty, and a live album box set, A Perfect Circle Live: Featuring Stone and Echo in late 2013. The band reformed in 2017 to record a fourth album, Eat the Elephant, which was released on April 20, 2018."
  }
*/
module.exports = copy;
