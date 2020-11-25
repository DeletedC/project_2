//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const studentsController = require('./controllers/students.js');
require('dotenv').config() // To include the .env file

// Saves me some typing
const show = console.log;
const env = process.env;

//___________________
//Port
//___________________

// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

////////////////
// View Engine
////////////////

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//___________________
//Database
//___________________

// How to connect to the database either via heroku or locally
const MONGODB_URI = env.MONGODB_URI || 'mongodb://localhost/project2';

// Connect to Mongo
  mongoose.connect(MONGODB_URI,  
    { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true })
    .catch(err => {
      show(`Error connecting to MongoDB: \n${err.message}`);
    });

// Error / success
//db.on('error', (err) => show(err.message + ', is Mongod not running?'));
db.on('connected', () => show('Mongo is connected.'));
db.on('disconnected', () => show('Mongo has disconnected.'));

// open the connection to mongo
db.on('open' , ()=>{});

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings

app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

// Use the students controller
app.use('/students', studentsController);

//___________________
// Routes
//___________________

//localhost:3000 
app.get('/' , (req, res) => {
  res.redirect('/students');
});

//___________________
//Listener
//___________________
app.listen(PORT, () => show( 'Listening on port:', PORT));