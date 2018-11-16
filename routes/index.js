'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const people = [
    {
      name: 'Filipe',
      country: 'Portugal',
      age: 34,
      languages: ['english', 'Language of love', 'catalan', 'portuguese', 'spanish']
    },
    {
      name: 'Axel',
      country: 'Catalonia',
      age: 19,
      languages: ['english', 'catalan', 'spanish']
    },
    {
      name: 'Anna',
      country: 'Sweden',
      age: 54,
      languages: ['english', 'swedish', 'spanish']
    }
  ];

  const data = {
    title: 'My awesome page',
    date: Date.now(),
    people
  };

  res.render('index', data);
});

module.exports = router;
