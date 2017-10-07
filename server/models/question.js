const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
});

const questionSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    answers: [answerSchema]
});

module.exports = mongoose.model('Question', questionSchema)