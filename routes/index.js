const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const mongoose = require('mongoose');
const Resa = require('../models/Resa');
const User = require('../models/User');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//GET results page according to search
router.get('/search', (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      message: "You have to be logged in to find a host"
    });
    return;
  }

  if (!("place" in req.query)) {
    res.status(400).json({
      messsage: "please add a place"
    })
  }
  //TODO: validate date format 
  if (!("date" in req.query)) {
    res.status(400).json({
      messsage: "please add a date"
    })
  }
  if (!("meal" in req.query)) {
    res.status(400).json({
      messsage: "please choose a meal"
    })
  }
  if (!("seats" in req.query)) {
    res.status(400).json({
      messsage: "please add number of seats"
    })
  }

  Event.find({
      'place': req.query.place,
      'date': req.query.date,
      'meal': req.query.meal,
      'seats': {
        $gte: req.query.seats
      }
    })
    .then(selectedEvents => {
      res.json(selectedEvents);
    })
    .catch(err => {
      res.json(err);
    })
});

//GET event details
router.get('/events/:event_id', (req, res, next) => {

  if (!mongoose.Types.ObjectId.isValid(req.params.event_id)) {
    res.status(400).json({
      message: 'Specified id is not valid'
    });
    return;
  }

  Event.findById(req.params.event_id)
    .then(response => {
      if (!response) {
        res.status(404).json({
          message: "event not find"
        })
      }

      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    })
})

//GET profile info
router.get('/profile', (req, res, next) => {

  if (!req.user) {
    res.status(401).json({
      message: "You have to be logged in to view your profile"
    });
    return;
  }

  Resa.find({
      'user_id': req.user._id
    })
    .populate("event_id")
    .then(bookedEvents => {
      let profile = {
        ...req.user
      };
      profile.bookedEvents = bookedEvents;

      res.status(200).json(profile);
    })
    .catch(err => {
      res.json(err);
    })
})

//POST book event
router.post('/book', (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      message: "You have to be logged in to book a reservation"
    });
    return;
  }

  Resa.create({
      user_id: req.user._id,
      event_id: req.body.event_id,
      seats: req.body.seats
    })
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});


module.exports = router;