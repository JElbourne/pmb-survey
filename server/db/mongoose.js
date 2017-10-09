const mongoose = require('mongoose');

const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/PMPsurvey';

mongoose.Promise = global.Promise;
mongoose.connect(dbUri, { useMongoClient: true})

module.exports = {mongoose};