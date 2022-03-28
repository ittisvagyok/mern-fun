var express = require("express");
var router = express.Router();
var { expenseModel } = require('../db/mongoModel');

router.get("/", function(req, res, next){
    expenseModel.find()
        .exec(function (err, rows) {
            if (err) return handleError(err);
            res.send(rows);
        });
});

router.get("/:id", function(req, res, next){
    expenseModel.findById(req.params.id, function(err, result){
        if(err){
            res.send(err);
        }
        res.send(result);
    })
});

module.exports = router;