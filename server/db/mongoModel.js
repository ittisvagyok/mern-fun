mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expenseSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
    ammount: {
        type: Number,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId, ref: 'category'
    }
});


var categorySchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    }
});

var expenseModel = mongoose.model('expense', expenseSchema);
var categoryModel = mongoose.model('category', categorySchema);

module.exports = {
    expenseModel,
    categoryModel
};