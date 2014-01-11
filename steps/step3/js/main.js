$(function() {
  
  console.log("whee!")

  // event handler
  $("#btn-click").click(function(e) {
    var input = $("input").val()
    console.log(input)
  });

});
