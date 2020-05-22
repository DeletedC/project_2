const express = require('express');

const studentsController = express.Router();

const mongoose = require('mongoose');

const Student = require('../models/students.js');

/////////////////////
// ROUTES
////////////////////

// === PRESENTATION ROUTES ===

studentsController.get('/', (req, res) => {
    res.render('Index');
})

// EXPORT
module.exports = studentsController;