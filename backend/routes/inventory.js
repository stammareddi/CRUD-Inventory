const router = require('express').Router();
let Inventory = require('../models/inventory.model');

router.route('/').get((req, res) => {
  Inventory.find()
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

  const newItem = new Inventory({
    locationName,
    itemName,
    itemSummary,
    itemType,
    itemCost,
    itemStock
  });

  newItem.save()
  .then(() => res.json('Item added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Inventory.findById(req.params.id)
    .then(e => res.json(e))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Inventory.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Inventory.findById(req.params.id)
    .then(item => {
      item.locationName = req.body.locationName;
      item.itemName = req.body.itemName;
      item.itemSummary = req.body.itemSummary;
      item.itemType = req.body.itemType;
      item.itemCost = req.body.itemCost;
      item.itemStock = req.body.itemStock;




      item.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;