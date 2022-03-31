var express = require("express");
var router = express.Router();
var { categoryModel } = require('../db/mongoModel');

router.get("/", function(req, res, next){
    categoryModel.find()
    .exec(function(err, rows){
        if(err){
            res.send(err);
        }
        res.send(rows);
    })
});

router.get("/:id", function(req, res, next){
    categoryModel
    .findById(req.params.id, function(err, result){
        if(err){
            res.send(err);
        }
        res.send(result);
    })
});

router.post("/", function(req, res, next){
    let data = {
        title: req.body.title        
    }
    var newCategory = new categoryModel(data);

    newCategory.save(function(err) {
         if (err) {
             res.send(err);
         }
         res.send(newCategory);
    });
});

router.patch("/:id", function(req, res, next){
    const condition = { _id: req.params.id };
    const update = req.body;
    categoryModel
    .findOneAndUpdate(
        condition,
        update,
        {
            returnOriginal: false
        },
        function(err, doc){
            if(err){
                res.send(err);
            }
            res.send(doc);
        }
    )
});

router.delete("/:id", function(req, res, next){
    const condition = { _id: req.params.id};
    categoryModel
    .findOneAndDelete(
        condition,
        function(err, doc){
            if(err){
                res.send('Couldn\'t delete category');
            }
            if(doc == null){
                console.log('Category id not found');
            } else {
                res.send(doc);
            }
        }
    );
});

module.exports = router;