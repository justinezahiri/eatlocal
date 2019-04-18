// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js
// require('dotenv').config({
//   path: require('path').resolve(__dirname, '../.env')
// });

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const bcryptSalt = 10;
const Event = require("../models/Event");

mongoose
  .connect('mongodb+srv://user:ironhack123@cluster0-omqyx.mongodb.net/eatlocal', {
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
    date: new Date("2019-05-07"),
    meal: "Lunch",
    place: "Paris",
    address: "12 rue Lamarck 75018",
    seats: 2,
    name: "Antoine",
    specialities: "risotto, pasta",
    menu: ["mozza tomato", "risotto", "tiramisu"],
    image: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555608210/risotto-aux-saveurs-ditalie-1160x650-BS003122-pub-67290-01.jpg",
    avatar: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607672/abernier.png"
  },
  {
    date: new Date("2019-06-13"),
    meal: "Dinner",
    place: "Paris",
    address: "96 rue Nationale 75013",
    seats: 4,
    name: "Antoine",
    specialities: "jambon beurre sandwich, pizza",
    menu: ["salad", "jambon beurre sandwich", "coffee"],
    image: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607861/jambonbeurre.jpg",
    avatar: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607663/antoine.png"
  },
  {
    date: new Date("2019-05-07"),
    meal: "Lunch",
    place: "Paris",
    address: "4 place de la Madeleine 75008",
    seats: 2,
    name: "Archana",
    specialities: " french ratatouille, kefta, fried chicken",
    menu: ["soup", "french ratatouille", "chocolate cake"],
    image: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607735/ratatouille.jpg",
    avatar: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555608482/archana.png"
  },
  {
    date: new Date("2019-06-13"),
    meal: "Dinner",
    place: "Paris",
    address: "43 rue de La Boétie 75008",
    seats: 4,
    name: "Beatrice",
    specialities: "vegetable salad, cakes, fish&chips",
    menu: ["soup", "vegetable salad", "fruit cake"],
    image: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607706/vegatablesalad.jpg",
    avatar: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607643/beatrice.png"
  },
  {
    date: new Date("2019-05-07"),
    meal: "Lunch",
    place: "Paris",
    address: "1 boulevard Victor 75015",
    seats: 2,
    name: "Arthur",
    specialities: "ramen, samousas",
    menu: ["samousas", "ramen", "cookies"],
    image: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607742/ramen.jpg",
    avatar: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607649/arthur.png"
  },
  {
    date: new Date("2019-06-13"),
    meal: "Dinner",
    place: "Paris",
    address: "78 rue Montorgueil 75002",
    seats: 4,
    name: "Jihad",
    specialities: "quiche lorraine, pasta",
    menu: ["vegetables chips", "quiche lorraine", "mint tea"],
    image: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607748/quichelorraine.jpg",
    avatar: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607601/jihad.png"
  },
  {
    date: new Date("2019-05-07"),
    meal: "Lunch",
    place: "Paris",
    address: "45 rue d'Aboukir 75002",
    seats: 2,
    name: "Lucas",
    specialities: "gratin dauphinois, chocolate cake",
    menu: ["salad", "gratin dauphinois", "chocolate cake"],
    image: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607775/gratindauphinois.jpg",
    avatar: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607579/lucas.png"
  },
  {
    date: new Date("2019-06-13"),
    meal: "Dinner",
    place: "Paris",
    address: "81 rue du Charolais 75012",
    seats: 4,
    name: "Merwan",
    specialities: "steak with french fries, fruit salad",
    menu: ["advocado and shrimps", "steak with french fries", "fruit salad"],
    image: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607714/steakfrites.jpg",
    avatar: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607564/merwan.png"
  },
  {
    date: new Date("2019-05-07"),
    meal: "Lunch",
    place: "Paris",
    address: "95 Place de la Madeleine 75011",
    seats: 2,
    name: "Rita",
    specialities: "beef with carrots, yoghourt",
    menu: ["tomato salad", "beef with carrots", "yoghourt"],
    image: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607898/boeufcarottes.jpg",
    avatar: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607556/rita.png"
  },
  {
    date: new Date("2019-06-13"),
    meal: "Dinner",
    place: "Paris",
    address: "41 rue du Temple 75004",
    seats: 4,
    name: "Robert",
    specialities: "roast chicken, tortillas",
    menu: ["tortillas with cheddar", "roast chicken", "sundae"],
    image: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555609180/pouletroti.jpg",
    avatar: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607547/robert.png"
  },
  {
    date: new Date("2019-05-07"),
    meal: "Lunch",
    place: "Paris",
    address: "21 rue Yves Toudic 75010",
    seats: 2,
    name: "Saro",
    specialities: "cod fish with cream sauce, cookies",
    menu: ["soup", "cod fish with cream sauce", "cookies"],
    image: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555609470/cabillaud.jpg",
    avatar: "https://res.cloudinary.com/dl297oyd1/image/upload/v1555607538/saro.png"
  },

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