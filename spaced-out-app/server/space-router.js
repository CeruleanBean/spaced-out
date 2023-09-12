require('dotenv').config();
const express = require('express');
const axios = require('axios');
const Quote = require('./db/Quote');

const spaceRouter = express.Router();

spaceRouter.get('/initial', async (req, res) => {
  const query = await Quote.find().limit(15);
  res.send(query);
});

spaceRouter.get('/meditate', (req, res) => {
  axios.get(`${process.env.API_URI}/random`)
    .then((quotes) => res.status(200).send(quotes.data))
    .catch((err) => res.status(404).send(err));
});

spaceRouter.post('/', async (req, res) => {
  const entry = new Quote(req.body);
  entry.save()
    .then(res.status(201).send())
    .catch(err => console.error(err));
});

module.exports = spaceRouter;