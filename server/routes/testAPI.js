var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
    res.send("Nodemon change monitor works!");
});

module.exports = router;