$(document).ready(function () {
  //Main login to send to the backend the user info in index.html
  $(".submitButton").on("click", function (event) {
    event.preventDefault();
    var userLogin = {
      userName: $("#name").val().trim(),
      userPassword: $("#password").val().trim(),
    };

    loginValidation(userLogin);
  });

  function loginValidation(info) {
    console.log(info);
    $.post("/api/login", info, function (response) {
      if (response) {
        console.log("Succesful login: ", response);
        if (response == "delivery") {
          window.location.replace("/delivery");
        } else {
          window.location.replace("/customer");
        }
      } else {
        console.log("wrong password");
        $(".hide-error").text("Incorrect User or Password!!!");
      }
    });
  }
  //end of login

  // route to signup
  $(".signup").on("click", function (event) {
    event.preventDefault();
    $.post("/signup",function (response){
      window.location.replace("/signup");
    })
  });
  //sign up new users sending the data to the backend in signup.html
  $(".newUser").on("click", function (event) {
    event.preventDefault();
    var userSignup = {
      userName: $("#name").val().trim(),
      userPassword: $("#password").val().trim(),
      userAddress: $("#address").val().trim(),
      userType: $("#type").val().trim(),
    };
    console.log("user sign up clicked", userSignup);

    if(userSignup.userPassword.length<8){
      $(".wrongPassword").text("Your password must be at least 8 characters");
        $("#password").addClass("is-danger");
        $("#iconClass").addClass("fas fa-exclamation-triangle");
        return
    } else if(userSignup.userAddress.length<1){
      $(".wrongAddress").text("Your address cannot be blank");
        $("#address").addClass("is-danger");
        $("#iconClass").addClass("fas fa-exclamation-triangle");
        return
    } 
    else {
      signUpValidation(userSignup);
    }
  });

  function signUpValidation(info) {
    console.log(info);
    $.post("/api/signup", info, function (response) {
      if (response) {
        newUser = suggestUserName(info);
        console.log("User already exist, try: ", newUser);
        var suggest = "User already exist, try: " + newUser;
        $(".userExist").text(suggest);
        $("#name").addClass("is-danger");
        $("#iconClass").addClass("fas fa-exclamation-triangle");
      } else {
        console.log("User registered succesfuly");
        $(".successRegister").text("Your user was created succesfully!")
        $(".startApp").text("Go to Sign In!")
      }
    });
  }

  function suggestUserName(info) {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var newName = info.userName;
    for (i = 0; i < 4; i++) {
      newName += Math.floor(Math.random() * 10);
    }
    return newName;
  }

  // end of sign up

  var products;

  //getProducts();

  function getProducts() {
    $.get("/api/products", function (data) {
      products = JSON.stringify(data);
      console.log("getting products: " + products);
      var newP = $("<p>");
      newP.text(products);
      var div = $(".products");
      newP.append($(div));
    });
  }
});
