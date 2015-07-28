$(function() {
  $("form").submit(function(e) {
    e.preventDefault()
    $(".person").empty().append($("input.person").val());
    $(".adjective").empty().append($("input.adjective").val());
    $(".noun").empty().append($("input.noun").val());
    $(".insect").empty().append($("input.insect").val());
    $(".noun2").empty().append($("input.plural-noun").val());
    $(".verb").empty().append($("input.verb").val());
    $("#story").show();
    $(':input').val('');
    $("#questions").hide();
  });
});


// What's going on here?

// $("form").submit() initiates the process. In other words, the remaining jQuery doesn't run until you submit the form.
// e.preventDefault() disables the browser's default behavior.
// .val() fetches the value from the form inputs
// .empty() removes any text from that specific class in the story.
// .append() then adds the new value to the stort.
// .show() unhides the story
// .hide() hides the questions
