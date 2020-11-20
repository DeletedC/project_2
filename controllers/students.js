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

// NEW ROUTE
studentsController.get('/new', (req, res) => {
    res.render('New');
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



// EDIT ROUTE
studentsController.get('/edit/:id', (req, res) => {
    Student.findById(req.params.id, (error, foundStudent) => {
        if (error) {
            show(error);
        } else {
            res.render('Edit', {student: foundStudent});
        }
    });
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

// UPDATE ROUTE
studentsController.put('/edit/:id', (req, res) => {
    Student.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        if (error) {
            show(error);
        } else {
            res.redirect('/students');
        }
    });
});

// DELETE ROUTE
studentsController.delete('/:id', (req, res) => {
    Student.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            show(error);
        } else {
            res.redirect('/students');
        }
    });
});

// EXPORT
module.exports = studentsController;