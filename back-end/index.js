const express = require('express');
const cors = require('cors');
const database = require('./database');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.get('/data/:dataKey', async (req, res) => {
  const { dataKey } = req.params;
  const data = await database.getData(dataKey);
  res.send(data);
});

app.post('/data/:dataKey', async (req, res) => {
  const { dataKey } = req.params;
  const { newValue } = req.body;
  database.setData(dataKey, newValue);
  res.sendStatus(200);
});

app.listen(3001, () => {
  console.log('App is listening on port 3001');
});
