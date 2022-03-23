$(".text").hide();

// DESIGN TOGGLE EFFECT

$('.target-design').click(function() {
  $(".design-showing").toggle();
  $(".design-hidden").toggle();
});


// DEVELOPMENT TOGGLE EFFECT

$('.target-dev').click(function() {
  $(".dev-showing").toggle();
  $(".dev-hidden").toggle();
});


// PRODUCT TOGGLE EFFECT

$('.target-product').click(function() {
  $(".product-showing").toggle();
  $(".product-hidden").toggle();
});




// ALERT MESSAGE

$("#feedbackBtn").click(function() {
  alert("We have received your Message, thanks for contacting us");

});
