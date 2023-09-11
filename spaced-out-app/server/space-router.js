require('dotenv').config();
const path = require('path');
const express = require('express');
const axios = require('axios');

const spaceRouter = express.Router();

spaceRouter.get('/initial', (req, res) => {
  axios.get(path.join(process.env.API_URI, 'quotes'))
    .then((quotes) => res.status(200).send(quotes.data))
    .catch((err) => res.status(404).send(err));
});

spaceRouter.get('/meditate', (req, res) => {
  axios.get(path.join(process.env.API_URI, 'random'))
    .then((quotes) => res.status(200).send(quotes.data))
    .catch((err) => res.status(404).send(err));
});
