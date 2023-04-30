const express = require('express');

const app = express();
app.use(express.json());

const PORT = 8080;
const HOST = '0.0.0.0';

app.post('/', (req, res) => {
  let unsorted = req.body['array'];
  let result = { sorted: unsorted.sort((i, j) => i-j) };
  res.status(200).send(result);
});

app.listen(PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}`);
});