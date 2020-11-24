const express = require('express');

const studentsController = express.Router();

const mongoose = require('mongoose');
require('../server.js');

const Student = require('../models/students.js');

const show = console.log;

/////////////////////
// MIDDLEWARE
////////////////////

// Check if database is active
// const dbCheck = (req, res, next) => {
//         console.log(db.runCommand({connectionStatus: 1}));
//         next();
// }

/////////////////////
// ROUTES
////////////////////

// === PRESENTATION ROUTES ===

// INDEX ROUTE
studentsController.get('/', async (req, res) => {
    console.log("Where am I?");

    try {
        if (mongoose.connection.readyState == 0) {
            console.log(mongoose.connection.readyState);
            res.render('Index', {students: 'noDatabase'});
        } else {
            await Student.find({}, (error, allStudents) => {
                if (error) {
                    show(error);
                } else {
                    res.render('Index', {students: allStudents});
                }
            });
        }
        
    } catch (error) {
        res.send("Haha, whoops from the Index route!");
    }

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