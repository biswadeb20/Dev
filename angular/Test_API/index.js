// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRouter = require('./router/studentRouter');

const app = express();
app.use(cors());
const port = 5000;

app.use(bodyParser.json());
app.use('/students', studentRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
