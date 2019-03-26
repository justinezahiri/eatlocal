const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resaSchema = new Schema({
  user_id: String,
  event_id: String,
  seats: Number
});

const Resa = mongoose.model('Resa', resaSchema);
module.exports = Resa;