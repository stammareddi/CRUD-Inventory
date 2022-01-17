const router = require('express').Router();
let Location = require('../models/location.model');

router.route('/').get((req, res) => {
  Location.find()
    .then(loc => res.json(loc))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const locationName = req.body.locationName;

  const newLocation = new Location({locationName});

  newLocation.save()
    .then(() => res.json('Location added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;