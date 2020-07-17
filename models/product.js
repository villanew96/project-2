getProducts();

  function getProducts() {
    $.get("/api/products", function (info){
     //renderProducts(info) 
     return info;
    });
  }