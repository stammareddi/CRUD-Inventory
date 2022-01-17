const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const locationName = req.body.locationName;
  const itemName = req.body.itemName;
  const itemSummary = req.body.itemSummary;
  const itemType = req.body.itemType;
  const itemCost = req.body.itemCost;
  const itemStock = req.body.itemStock;

  const newExercise = new Exercise({
    locationName,
    itemName,
    itemSummary,
    itemType,
    itemCost,
    itemStock
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.locationName = req.body.locationName;
      exercise.itemName = req.body.itemName;
      exercise.itemSummary = req.body.itemSummary;
      exercise.itemType = req.body.itemType;
      exercise.itemCost = req.body.itemCost;
      exercise.itemStock = req.body.itemStock;




      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;