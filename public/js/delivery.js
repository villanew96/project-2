$(".placed_order").on("click", function () {
  event.preventDefault();
  var value = {
    id: $(this).attr("value"),
  };
  console.log("clicked an icon on waiting to be elivered", value);
  $.post("/api/delivery/placed", value, function (response) {
    console.log("order in-transit")
    location.reload();
  });
});

$(".in_transit").on("click", function () {
  event.preventDefault();
  var value = {
    id: $(this).attr("value"),
  };
  console.log("clicked an icon in_transit", value);
  $.post("/api/delivery/transit", value, function () {
      console.log("order completed")
      window.location.reload();
  });
});

$(".completed").on("click", function () {
    event.preventDefault();
    var value = {
      id: $(this).attr("value"),
    };
    console.log("clicked an icon complete", value);
    $.post("/api/delivery/complete", value, function () {
        console.log("order delete from view")
        window.location.reload();
    });
  });
  

