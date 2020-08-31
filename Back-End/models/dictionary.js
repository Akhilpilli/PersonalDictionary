const mongoose = require('mongoose');



const DictionarySchema = mongoose.Schema({
    word:{
        type: String,
        require: true
    },
    meaning:{
        type: String,
        required: true
    }
});

const dictionary = module.exports = mongoose.model('Dictionary', DictionarySchema);