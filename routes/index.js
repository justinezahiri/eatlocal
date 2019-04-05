const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//GET results page according to search
router.get('/search', (req, res, next) => {
  Event.find({
      place: 'Paris',
      date: '04.03.2019',
      meal: 'lunch',
      seats: '3'
    })
    //TODO: filtrer avec la req.query
    .then(selectedEvents => {
      res.json(selectedEvents);
    })
    .catch(err => {
      res.json(err);
    })
});

//GET event details
router.get('/:event_id', (req, res, next) => {

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: 'Specified id is not valid'
    });
    return;
  }
  Event.findById(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    })
})

//POST book event
router.post('book', (req, res, next) => {
  const user_id = req.body.user_id;
  const event_id = req.body.event_id;
  const seats = req.body.seats;
})


module.exports = router;