$(document).ready(function() {
    
    $(".submitButton").on("click", function(event){
        event.preventDefault();
        var userLogin = {
            userName: $("#name").val().trim(),
            userPassword: $("#password").val().trim()

        }
         
        loginValidation(userLogin);

    });

    function loginValidation(info){
        console.log(info);
        $.post("/api/login", info, function(response){
            
            if (response){
                console.log("Succesful login: ", response);
                if (response == "delivery"){
                    window.location.replace("/delivery")
                } else {
                    window.location.replace("/customer")
                }
            } else {
                console.log("wrong password");
                $(".hide-error").text("Incorrect User or Password!!!")
            }
        });
    }
 
    
    
    var products;
    
    //getProducts();

    function getProducts(){
        $.get("/api/products",function(data){
            products = JSON.stringify(data);
            console.log("getting products: "+ products);
            var newP = $("<p>");
            newP.text(products);
            var div = $(".products")
            newP.append($(div))
        });
    };

});