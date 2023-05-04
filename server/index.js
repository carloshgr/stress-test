const express = require('express');
const bubblesort = require('./bubblesort.js').bubblesort;

const app = express();
app.use(express.json());

const PORT = 8080;
const HOST = '0.0.0.0';

app.post('/quicksort', (req, res) => {
  let unsorted = req.body['array'];
  let result = { sorted: unsorted.sort((i, j) => i-j) };
  res.status(200).send(result);
});

app.post('/bubblesort', (req, res) => {
  let unsorted = req.body['array'];
  let result = { sorted: bubblesort(unsorted) };
  res.status(200).send(result);
});

app.listen(PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}`);
});