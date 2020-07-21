// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
var path = require("path");

console.log("api-routes");

// Routes
// =============================================================
module.exports = function (app) {
  // GET route for getting all of the products

  app.get("/api/products/:product", function (req, res) {
    res.redirect(`/customer/search?flag=filter&search=${req.params.product}`);
  });

  // Login route, gets the info from the front end, then sends a query to the databse and compare, if succesfull sends true else false
  app.post("/api/login", function (req, res) {
    db.users
      .findOne({
        where: {
          name: req.body.userName,
        },
      })
      .then(function (dbUser) {
        console.log("dbUsr: ", dbUser.type);
        validation = validatePassword(dbUser);
        if (validation) {
          res.json(dbUser.type);
        } else {
          res.json(validation);
        }
      });

    function validatePassword(info) {
      var validation;
      console.log("passwords: ", info.password, req.body.userPassword);
      if (info.password == req.body.userPassword) {
        validation = true;
      } else {
        validation = false;
      }
      return validation;
    }
  });
  // login section ends

  // sign up section, where we receive the data from the front end, validate if the user is new, if yes create else return user already exist
  app.post("/api/signup", function (req, res) {
    console.log("getting sign up ", req.body);
    db.users
      .findOne({
        where: {
          name: req.body.userName,
        },
      })
      .then(function (dbUser) {
        console.log("dbUsr: ", dbUser);
        if (!dbUser) {
          createUser(req.body);
          res.json(false);
        } else {
          res.json(true);
        }
      });

    function createUser(info) {
      db.users
        .create({
          name: info.userName,
          password: info.userPassword,
          address: info.userAddress,
          type: info.userType,
        })
        .then(function () {
          console.log("user created in DB");
        });
    }
  });
  // sign up section ends

  // products sections, returns the products in the database

  app.get("/api/products/", function (req, res) {
    db.products.findAll({}).then(function (dbProducts) {
      res.json(dbProducts);
    });
  });

  // products section ends

  //change delivery status for an order
  app.post("/api/delivery/placed", function (req, res) {
    console.log(req.body.id);
    db.orders
      .update(
        {
          placed_order: false,
          in_transit: true,
          completed: false,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      )
      .then(function (dbUser) {
        console.log("order modified");
        res.render("delivery");
      });
  });

  app.post("/api/delivery/transit", function (req, res) {
    console.log(req.body.id);
    db.orders
      .update(
        {
          placed_order: false,
          in_transit: false,
          completed: true,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      )
      .then(function (dbUser) {
        console.log("order modified");
        res.render("delivery");
      });
  });

  app.post("/api/delivery/complete", function (req, res) {
    console.log(req.body.id);
    db.orders
      .update(
        {
          placed_order: false,
          in_transit: false,
          completed: false,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      )
      .then(function (dbUser) {
        console.log("order modified");
        res.render("delivery");
      });
  });
  // delivery section end
  // adding items to Cart section
  app.post("/api/cart", function (req, res) {
    console.log(req.body.id);
    db.products
      .findOne({
        where: {
          id: req.body.id,
        },
      })
      .then(function (response) {
        console.log(response.dataValues.name);
        db.carts
          .create({
            id: response.dataValues.id,
            name: response.dataValues.name,
            picture: response.dataValues.picture,
            price: response.dataValues.price,
            quantity: 1,
          })
          .then(function () {
            res.render("customer");
          });
      });
  });
  // cart ends
  app.post("/api/checkout", function (req, res) {
    db.carts.findAll({}).then(function (data) {
      var orderTotal = 0;
      for (i = 0; i < data.length; i++) {
        orderTotal += parseInt(data[i].price);
      }

      var items = "";
      for (j = 0; j < data.length; j++) {
        items += data[j].name;
        items += ", ";
      }
      db.orders
        .create({
          user_id: 1,
          products: items,
          total_price: orderTotal,
          placed_order: true,
          in_transit: false,
          completed: false,
        })
        .then(function () {
          db.carts
            .destroy({
              where: {},
              truncate: true,
            })
            .then(function (data) {
              res.redirect("/customer");
            });
        });
    });
  });
  //checkout section

  //checlout ends
};
