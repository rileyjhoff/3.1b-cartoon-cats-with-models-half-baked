const { Router } = require('express');
const Cat = require('../models/Cats');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingCat = await Cat.getById(id);
    res.json(matchingCat);
  })
  .get('/', async (req, res) => {
    const catsIdAndNames = await Cat.getAllIdAndNames();
    res.json(catsIdAndNames);
  });
