// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the products
  app.get("/api/products", function(req, res) {
    db.products.findAll({}).then(function(data) {
      // We have access to the todos as an argument inside of the callback function
      res.json(data);
    });
    // Add sequelize code to find all posts, and return them to the user with res.json
  });

  app.post("/api/login",function(req,res){
      db.users.findOne({
          where: {
              name:req.body.userName,
          }
      }).then(function(dbUser){
          console.log("dbUsr: ",dbUser.type);
        validation = validatePassword(dbUser);
        if (validation){
            res.json(dbUser.type)
        } else{
        res.json(validation)
        }
      });
      
      function validatePassword(info){
          var validation;
          console.log("passwords: ", info.password, req.body.userPassword);
          if (info.password == req.body.userPassword){
            validation = true;
        } else {
            validation = false;
        }
        return validation;
      };
  });

};