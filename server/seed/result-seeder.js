const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/PMPsurvey', { useMongoClient: true})

const Result = require('../models/result');

const resultArray = [
    ["Result 1 paragraph",1],
    ["Result 2 paragraph",2],
    ["Result 3 paragraph",3],
    ["Result 4 paragraph",4],
    ["Result 5 paragraph",5]
];

var done = 0;
for (var i = 0; i < resultArray.length; i++){
    var result = new Result({
        description: resultArray[i][0],
        position: resultArray[i][1]
    });

    result.save().then((doc) => {
        done++;
        if (done === resultArray.length) {
            exit();
        }
    }, (e) => {

        
    });
}

function exit(){
    mongoose.disconnect();
}