$(document).ready(function() {
    var products;
    getProducts();

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