var express = require("express");
var router = express.Router();
var { expenseModel } = require('../db/mongoModel');

router.post("/", function(req, res, next){
    let newExpense = {
        title: req.body.title,
        ammount: req.body.ammount
    }
    var expenseInstance = new expenseModel(newExpense);

    expenseInstance.save(function (err) {
         if (err) {
             res.send(err);
         }
         res.send(expenseInstance.id);
    });
});

module.exports = router;