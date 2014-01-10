$("form#some-form").submit(function(event) {
  event.preventDefault();
  var someInput = $("input#some-input").val()
  $(".some-class").text("New text");
});
