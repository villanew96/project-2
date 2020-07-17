// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  // app.get("/", function(req, res) {
  //     console.log("index: ")
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

  app.get("/", function(req, res){
    res.render("index");
  });

  app.get("/delivery", function(req, res) {
      console.log("Succesful login")
    // res.sendFile(path.join(__dirname, "../public/delivery.html"));
    res.render("delivery")
  });

  app.get("/customer", function(req, res) {
    console.log("Succesful customer")
  // res.sendFile(path.join(__dirname, "../public/customer.html"));
  res.render("customer")
});

app.get("/signup", function(req, res) {
  console.log("Sign Up")
// res.sendFile(path.join(__dirname, "../public/customer.html"));
res.render("signup")
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