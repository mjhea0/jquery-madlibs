$(function() {
  $("form").submit(function(e) {
    e.preventDefault()
    $(".my-class").empty().append($("input").val());
  });
});
