var express = require("express");

var router = express.Router();

router.get("/", function (req, res) {
 res.render("index", {})
});

module.exports = function(app){
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "./views/index.handlebars"))
    })
};