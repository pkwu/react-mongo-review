require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes');
const parser = require('body-parser');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use('/api', router);
app.use(express.static(path.resolve(__dirname, '../client/public')));

app.listen(process.env.PORT, () => {
  console.log(`Successfully connected to PORT: ${process.env.PORT}`);
})