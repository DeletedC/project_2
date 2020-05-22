const express = require('express');

const studentsController = express.Router();

const mongoose = require('mongoose');

const Student = require('../models/students.js');

/////////////////////
// ROUTES
////////////////////

// === PRESENTATION ROUTES ===



// EXPORT
module.exports = studentsController;