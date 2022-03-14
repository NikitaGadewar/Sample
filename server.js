'use strict';

const express = require('express')
const app = express();

const port = 8080;
const host = '0.0.0.0';

app.get('/hello', (req, res) => {
  res.send('Hello.....My name is Nikita!');
})

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
