$(document).ready(function() {
  var score = 0;
  var question1 = createQuestion("Where does the phrase 'dog days of summer' come from ?",
                                 "Lazy dogs", "A reference", "A term coined from a famous novel", "A star",
  "A star");
  var question2 = createQuestion("Which movie is the popular song 'Summer Nights' from?",
                                 "Hairspray", "Grease", "The Sound of Music", "West Side Story",
  "Grease");
  var question3 = createQuestion("Which of these TV series does Summer Glau not appear in?",
                                 "Firefly", "The Big Bang Theory", "NCIS", "Arrow",
  "NCIS");
  var question4 = createQuestion("Buffy Summers from Buffy the Vampire Slayer is inspired by which X-Men character?",
                                 "Jean Grey", "Rogue", "Kitty Pryde", "Jubilee",
  "Kitty Pryde");
  var question5 = createQuestion("The song 'Summertime' by DJ Jazzy Jeff & The Fresh Prince did not mention doing what?",
                                 "Playing basketball", "Spending time on the beach", "Going to the mall",
  "Having a BBQ", "Spending time on teh beach");

  var questionList = [question1, question2, question3, question4, question5];

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
      $("img#q1-icon").css("opacity", "1.0");
      score +=1;
      correctNext("question-2");
    } else {
      $("#wrong").css("display", "block");
      wrongNext("question-2");
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
      $("img#q2-icon").css("opacity", "1.0");
      score +=1;
      correctNext("question-3");
    } else {
      $("#wrong").css("display", "block");
      wrongNext("question-3");
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
      $("img#q3-icon").css("opacity", "1.0");
      score +=1;
      correctNext("question-4");
    } else {
      $("#wrong").css("display", "block");
      wrongNext("question-4");
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
      $("img#q4-icon").css("opacity", "1.0");
      score +=1;
      correctNext("question-5");
    } else {
      $("#wrong").css("display", "block");
      wrongNext("question-5");
    }
  });

  $( " #question-5 form" ).submit(function( event ) {
    event.preventDefault();
    $("#c-next").unbind("click");
    $("#w-next").unbind("click");
    var input = $('input[name=q5]:checked', '#question-5').val();
    $("#question-5").css("display", "none");
    if (input == 'beach') {
      $("#correct").css("display", "block");
      $("img#q5-icon").css("opacity", "1.0");
      score +=1;
      correctTally(score);
    } else {
      $("#wrong").css("display", "block");
      wrongTally(score);
    }
  });

  function correctTally(score) {
    $("#c-next").click(function() {
      $("aside").css("display", "none");
      $("#score").css("display", "block");
      $("#score h1").append("<span>"+score+"</span>");
      $("html").css("background-image", "url('../images/score-of-"+score+".jpg')");
    });
  }

  function wrongTally(score) {
    $("#w-next").click(function() {
      $("aside").css("display", "none");
      $("#score").css("display", "block");
      $("#score h1").append("<span>"+score+"</span>");
      $("html").css("background-image", "url('../images/score-of-"+score+".jpg')");
    });
  }

  function correctNext(question) {
    $("#c-next").click(function() {
      $("aside").css("display", "none");
      $("#"+question).css("display", "block");
    });
  }

  function wrongNext(question) {
    $("#w-next").click(function() {
      $("aside").css("display", "none");
      $("#"+question).css("display", "block");
    });
  }

  function createQuestion(question, a, b, c, d, answer) {
    this.question = question;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.answer = answer;
    return this;
  }
});
