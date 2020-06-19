const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ status: 'Server running on http://localhost:3333' });
});

app.listen(3333);
