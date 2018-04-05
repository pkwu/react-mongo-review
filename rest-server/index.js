require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../client/public')));

app.listen(process.env.PORT, () => {
  console.log(`Successfully connected to PORT: ${process.env.PORT}`);
})