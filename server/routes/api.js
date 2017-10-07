const express = require('express');
const mongoose = require('mongoose');
const {MongoClient, ObjectID} = require('mongodb');

const Question = require('../models/question');

const router = express.Router();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/PMPsurvey', { useMongoClient: true})

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get questions
router.get('/questions', (req, res) => {
    Question.find().then((questions) => {
        console.log(questions);
        response.data = questions;
        res.json(response)
    }, (e) => {
        res.status(400).send(e);
    });

    // connection((db) => {
    //     db.collection('questions')
    //         .find()
    //         .toArray()
    //         .then((questions) => {
    //             response.data = questions;
    //             res.json(response);
    //         })
    //         .catch((err) => {
    //             sendError(err, res);
    //         });
    // });
});

module.exports = router;