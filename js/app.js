$(document).ready(function() {

  $("#start").click(function() {
    $("#starting-message").css("display", "none");
    $("#question-1").css("display", "block");
  });

  $( "form" ).submit(function( event ) {
    event.preventDefault();
    var input = $('input[name=q1]:checked', '#question-1').val();
    $("#question-1").css("display", "none");
    if (input == 'star') {
      $("#correct").css("display", "block");
    } else {
      $("#wrong").css("display", "block");
    }
  });

});
