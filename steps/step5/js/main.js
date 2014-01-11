$(function() {
  
  console.log("whee!")

  // ---- event handler ---- //
  $("#btn-click").click(function(e) {
  	// grab the value from the input box after the button click
    var input = $("input").val()
    // display value within the browser's JS console
    console.log(input)
    // add the value to the DOM
    $(".results").empty().append(input);
  });

});
