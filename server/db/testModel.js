mongoose = require('mongoose');

var testSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    }        
});

var testModel = mongoose.model('testModel', testSchema);

module.exports = testModel;