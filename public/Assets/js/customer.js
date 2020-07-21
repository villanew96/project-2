//makes button appear and disappear
$(document).ready(function () {
  $(".btnshopping").on("click", function (event) {
    event.preventDefault()
    $(".shopping-cart").attr("style","display:block")

      // $(".shopping-cart").toggle(function(){
      //   $(".shopping-cart").attr("style","display:block")
      // }, function(){
      //   $(".shopping-cart").attr("style","display:none")
      // });
 
  });

  console.log($(".shopping-right"));

  //generate cards and add them to the DOM per DB queries

  //getProducts();
  $(".inputSearch").on("click", function (event) {
    var search = $(".inputValue").val().trim();
    console.log(search);
    window.location.replace("/customer/search");
    $.get(`/api/products/${search}`, function () {
    });
  });

  function renderProducts(data) {
    console.log(data);
    var picture = "";
    var name = "";
    var price = 0;
    var quantity = 0;
    var card = "";
    var newDiv = $("<div>");
    newDiv.addClass("columns features");

    for (i = 0; i < data.length; i++) {
      console.log(i);
      picture = data[i].picture;
      name = data[i].name;
      price = data[i].price;
      quantity = data[i].quantity;
      card = `<div class="column is-4">
                <div class="card is-shady">
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img src="${picture}" alt="${name}" class="modal-button" data-target="modal-image2">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                    <h4>${name}</h4>
                    <p>Price $${price}</p>
                    <p>Stock $${quantity}</p>
                    <span class="button is-link modal-button" data-target="modal-image2">Add to Cart</span>
                    </div>
                </div>
                </div>
            </div>`;
      newDiv.append(card);
      if ((1 + i) % 3 == 0 || i == data.length - 1) {
        $(".col1").append(newDiv);
        newDiv = $("<div>");
        newDiv.addClass("columns features");
      }
    }
  }
});
