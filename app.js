const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const logger = require('morgan');
const path = require('path');
const nodemailer = require('nodemailer');
const keys = require('./config/keys');

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
app.get('/', (req, res, next) => {
  console.log('Index route works');
});

app.post('/api/form', (req, res, next) => {
  console.log(req.body);
  const output = `
    <p>New Job/Carrer Email: </p>
    <h3>Contact Details</h3>
      <p>Name: ${req.body.name}</p>
      <p>Company: ${req.body.company}</p>
      <p>Email: ${req.body.email}</p>
      <p>Phone: ${req.body.phone}</p>
    <h3>Message</h3>
    <p>
      ${req.body.message}
    </p>`;

  let nodemailer = require('nodemailer');

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: keys.email,
      pass: keys.secretKey,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: keys.email,
    to: keys.email,
    subject: req.body.name + ' Portfolio Page',
    text: 'Request',
    html: output,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('aa_exports-client/build'));

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'aa_exports-cient', 'build', 'index.html')
    );
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('aa webpage server started');
});
