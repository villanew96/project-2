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
    
    // db.products.findAll({where:{
    //   name: req.params.product
    // }}).then(function (data) {
    //   console.log("Succesful search")      
    //     console.log(data);
    //   // res.render("customer", {data})
      res.redirect(`/customer/search?flag=filter&search=${req.params.product}`)
    
      // });
    // Add sequelize code to find all posts, and return them to the user with res.json
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
};
