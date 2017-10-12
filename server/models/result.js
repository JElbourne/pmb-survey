const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resultSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Result', resultSchema)