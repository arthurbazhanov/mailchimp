'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const addEmailToMailChimp = require('./mailchimp');

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

app.post('/', (req, res) => {
  let email = req.body.email;
  addEmailToMailChimp(email);
  res.send('ok')
});

