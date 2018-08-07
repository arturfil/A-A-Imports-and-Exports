const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const logger = require('morgan');
const path = require('path');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoUri;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

//routes
app.use(express.static(__dirname));

// index route
app.get('/', (res, req, next) => {
  res.render('index');
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(epxress.static('aa_exports-client/build'));

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'aa_exports-client', 'build', 'index.html')
    );
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('aa webpage server started');
});
