var express = require("express");
var router = express.Router();
var { expenseModel, categoryModel } = require('../db/mongoModel');

router.get("/", function(req, res, next){
    expenseModel
    .find()
    .populate('category')
    .exec(function (err, rows) {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
});

router.get("/:id", function(req, res, next){     
    expenseModel
    .findById(req.params.id, function(err, result){
        if(err){
            res.send(err);
        }
        res.send(result);
    });
});


router.post("/", function(req, res, next){
    let data = {
        title: req.body.title,
        ammount: req.body.ammount
    }
    var newExpense = new expenseModel(data);

    newExpense.save(function(err) {
         if (err) {
             res.send(err);
         }
         res.send(newExpense);
    });
});

router.patch("/:id", function(req, res, next){
    const condition = { _id: req.params.id };    
    const update = req.body;        
    expenseModel.findOneAndUpdate(
        condition,
        update,
        {
            returnOriginal: false
        },
        function(err, doc){
            if(err){
                res.send('Error updating');
            }
            res.send(doc);
        }
    );
});

router.delete("/:id", function(req, res, next){
    const condition = { _id: req.params.id};
    expenseModel.findOneAndDelete(
        condition,
        function(err, doc){
            if(err){
                res.send('Couldn\'t delete expense');
            }            
            if(doc == null){
                res.send('Expense id not found');                
            } else {
                res.send(doc);
            }        
        }
    );
});

module.exports = router;