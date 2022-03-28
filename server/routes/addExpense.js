var express = require("express");
var router = express.Router();
var { expenseModel } = require('../db/mongoModel');

router.get("/", function(req, res, next){
    var expenseInstance = new expenseModel({ title: 'Expense 1', ammount: '200' });

    expenseInstance.save(function (err) {
         if (err) {
             res.send(err);
         }
         res.send(expenseInstance.id);
    });
});

module.exports = router;