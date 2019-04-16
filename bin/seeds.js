// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js
require('dotenv').config({
  path: require('path').resolve(__dirname, '../.env')
});

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const bcryptSalt = 10;
const Event = require("../models/Event");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  })

  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [{
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
  }
]

let events = [{
    date: new Date("2019-04-07"),
    meal: "lunch",
    place: "Paris",
    seats: 2,
    name: "Sandra",
    specialities: "risotto, pasta",
    menu: ["mozza tomato", "risotto", "tiramisu"],
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Italian_Risotto.png",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Allium_%27Lucy_Ball%27_Pink_Flower_Head_2236px.jpg"
  },
  {
    date: new Date("2019-06-13"),
    meal: "dinner",
    place: "Paris",
    seats: 6,
    name: "Justine",
    specialities: "couscous, tajine",
    menu: ["bricks", "couscous", "mint tea"],
    image: "https://img-3.journaldesfemmes.fr/pTtcQCmVUlV_ucigXiDuujn3fFc=/750x/smart/image-icu/10027186_1364256026.jpg",
    avatar: "https://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/rey_avatar.jpg"
  },
  {
    date: new Date("2019-08-03"),
    meal: "lunch",
    place: "Porto",
    seats: 4,
    name: "Dorinda",
    specialities: "baccalhau abras, pasteis de nata",
    menu: ["salad", "baccalhau abras", "pasteis de nata"],
    image: "https://static.cuisineaz.com/400x320/i289-bacalhau-a-bras.jpg",
    avatar: "http://sierraflowerfinder.blob.core.windows.net/medias/FlowerPictures/7476/thumb_271x220_avatar2-breeder.jpg"
  }
]

User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
    return Event.create(events)
    //TODO: console.log created events
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })