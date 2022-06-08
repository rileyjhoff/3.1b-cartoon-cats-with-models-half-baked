const { Router } = require('express');
const Cat = require('../models/Cats');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingCat = await Cat.getById(id);
    res.json(matchingCat);
  })
  .get('/', async (req, res) => {
    const catsData = await Cat.getAll();
    res.json(catsData);
  });
