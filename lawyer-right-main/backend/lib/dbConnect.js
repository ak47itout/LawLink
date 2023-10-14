const mongoose = require('mongoose');
require('dotenv').config();

const MONG_URI = process.env.MONGODB_URI;

mongoose.connect(MONG_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', function (err) {
  console.log('Error occured' + err);
});

db.once('connected', function () {
  console.log('connection is successful to' + MONG_URI);
});

module.exports = db;
