$(document).ready(function() {

  $("#start").click(function() {
    $("#starting-message").css("display", "none");
    $("#question-1").css("display", "block");
  });

  $( " #question-1 form" ).submit(function( event ) {
    event.preventDefault();
    var input = $('input[name=q1]:checked', '#question-1').val();
    $("#question-1").css("display", "none");
    if (input == 'star') {
      $("#correct").css("display", "block");
      correctNext("#question-2");
    } else {
      $("#wrong").css("display", "block");
      wrongNext("#question-2");
    }
  });

  $( " #question-2 form" ).submit(function( event ) {
    event.preventDefault();
    $("#c-next").unbind("click");
    $("#w-next").unbind("click");
    var input = $('input[name=q2]:checked', '#question-2').val();
    $("#question-2").css("display", "none");
    if (input == 'grease') {
      $("#correct").css("display", "block");
      correctNext("#question-3");
    } else {
      $("#wrong").css("display", "block");
      wrongNext("#question-3");
    }
  });

  $( " #question-3 form" ).submit(function( event ) {
    event.preventDefault();
    $("#c-next").unbind("click");
    $("#w-next").unbind("click");
    var input = $('input[name=q3]:checked', '#question-3').val();
    $("#question-3").css("display", "none");
    if (input == 'ncis') {
      $("#correct").css("display", "block");
      correctNext("#question-4");
    } else {
      $("#wrong").css("display", "block");
      wrongNext("#question-4");
    }
  });

  $( " #question-4 form" ).submit(function( event ) {
    event.preventDefault();
    $("#c-next").unbind("click");
    $("#w-next").unbind("click");
    var input = $('input[name=q4]:checked', '#question-4').val();
    $("#question-4").css("display", "none");
    if (input == 'kitty') {
      $("#correct").css("display", "block");
      correctNext("#question-5");
    } else {
      $("#wrong").css("display", "block");
      wrongNext("#question-5");
    }
  });

  function correctNext(question) {
    $("#c-next").click(function() {
      $("aside").css("display", "none");
      $(question).css("display", "block");
    });
  }

  function wrongNext(question) {
    $("#w-next").click(function() {
      $("aside").css("display", "none");
      $(question).css("display", "block");
    });
  }
});
