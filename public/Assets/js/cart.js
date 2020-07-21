$(document).ready(function () {

$(".addToCart").on("click", function(event){
    event.preventDefault();
var productId = {
    id: $(this).attr("value"),
  };
console.log("Adding product with id: ",productId, " to Cart");
$.post("/api/cart", productId, function (response) {
    console.log("added to cart")
    location.reload();
  });
});

$(".checkoutBtn").on("click", function(event){
    event.preventDefault();
console.log("checking out");
$.post("/api/checkout", function (response) {
    console.log("order completed")
    location.reload();
  });
});

});