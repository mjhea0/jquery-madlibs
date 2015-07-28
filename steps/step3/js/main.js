$(function() {

  console.log("whee!")

  // event handler
  $("#btn-click").click(function(e) {
    e.preventDefault()
    var input = $("input").val()
    console.log(input)
  });

});
