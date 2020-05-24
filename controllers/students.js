const express = require('express');

const studentsController = express.Router();

const mongoose = require('mongoose');

const Student = require('../models/students.js');

const show = console.log;

/////////////////////
// ROUTES
////////////////////

// === PRESENTATION ROUTES ===

// INDEX ROUTE
studentsController.get('/', (req, res) => {
    Student.find({}, (error, allStudents) => {
        if (error) {
            show(error);
        } else {
            res.render('Index', {students: allStudents});
        }
    });
});

// SHOW ROUTE
studentsController.get('/:id', (req, res) => {
    Student.findById(req.params.id, (error, foundStudent) => {
        if (error) {
            show(error);
        } else {
            res.render('Show', {student: foundStudent});
        }
    });
});

// NEW ROUTE
studentsController.get('/new', (req, res) => {
    res.render('New');
});

// === FUNCTIONAL ROUTES ===

// CREATE ROUTE
studentsController.post('/', (req, res) => {
    Student.create(req.body, (error, newStudent) => {
        if (error) {
            show(error);
        } else {
            res.redirect('/');
        }
    });
});

// EXPORT
module.exports = studentsController;