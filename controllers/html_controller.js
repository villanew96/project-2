var express = require("express");
//var path = require("path");
var router = express.Router();

var products = require("../models/product")

router.get("/customer", function (req, res) {
 products.getProducts(function(data){
     var pdctObject ={
         products: data
     };
     console.log(pdctObject);
     res.render("customer", pdctObject);
 })
});

module.exports = router;