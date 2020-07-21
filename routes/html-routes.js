// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
var db = require("../models");
// Dependencies
// =============================================================
var path = require("path");
var product = require("./api-routes");
// Routes
// =============================================================
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  // app.get("/", function(req, res) {
  //     console.log("index: ")
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/delivery", function (req, res) {
    console.log("Succesful login");
    db.orders.findAll({}).then(function (data) {
      console.log("found ", data.length, " items in search, rendering...");
      console.log(data);
      res.render("delivery", { data });
    });
  });

  app.get("/customer", function (req, res) {
    if (req.query.flag) {
      console.log(req.query);
      db.products
        .findAll({
          where: {
            name: req.query.search,
          },
        })
        .then(function (data) {
          console.log("Succesful search");
          console.log(data[0].dataValues);
          // res.location("/customer")
          res.render("customer", { data });
        });
    } else {
      console.log("Succesful customer");
      db.products.findAll({}).then(function (data) {
        console.log("found ", data.length, " items in search, rendering...");
        db.carts.findAll({}).then(function (cartItems) {
          console.log("found ", cartItems.length, " items in search, rendering...");
          var cartTotal= 0;
          for (i=0;i<cartItems.length;i++){
            cartTotal += parseInt(cartItems[i].price)
          }
          var itemsNum = cartItems.length;
          res.render("customer", { data, cartItems, cartTotal, itemsNum });
        });
        // res.render("customer", { data });
      });
    }
  });

  app.get("/customer/search", function (req, res) {
    console.log("Succesful Search", req.query.flag);
    console.log(req.query);
    db.products
      .findAll({
        where: {
          name: req.query.search,
        },
      })
      .then(function (data) {
        console.log("Succesful search");
        console.log(data[0].dataValues);
        // res.location("/customer/search")
        res.render("customer", { data });
      });
  });

  app.get("/signup", function (req, res) {
    console.log("Sign Up");
    // res.sendFile(path.join(__dirname, "../public/customer.html"));
    res.render("signup");
  });
  //   // cms route loads cms.html
  //   app.get("/cms", function(req, res) {
  //     res.sendFile(path.join(__dirname, "../public/cms.html"));
  //   });

  //   // blog route loads blog.html
  //   app.get("/blog", function(req, res) {
  //     res.sendFile(path.join(__dirname, "../public/blog.html"));
  //   });

  //   // authors route loads author-manager.html
  //   app.get("/authors", function(req, res) {
  //     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  //   });
};
