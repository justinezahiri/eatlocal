const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  date: Date,
  meal: {
    type: String,
    enum: ['lunch', 'dinner']
  },
  place: String,
  seats: Number,
  name: String,
  specialities: String,
  menu: Array,
  image: String,
  avatar: String
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;