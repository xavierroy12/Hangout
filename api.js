// Importing libraries
const express = require('express');
const cors = require('cors'); // add this line

const app = express();
app.use(cors()); // add this line

const environment = process.env.NODE_ENV || 'development'; // set environment
const config = require('./knexfile')[environment]; // import knexfile config related to environment
const knex = require('knex')(config); // initialize knex with config

app.get('/api/users', async (req, res) => {
  const users = await knex('users').select('*');
  res.json(users);
});

//Sa part le api.js
const port = process.env.PORT || 3000; // set port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});