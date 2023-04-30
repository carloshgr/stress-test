const express = require('express');
const path = require('path');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  console.log('new request!');
  res.status(200).send('hello!\n');
});

app.listen(PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}`);
});