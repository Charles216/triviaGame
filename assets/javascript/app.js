$(document).ready(function() {

  //Counter starts with 30 seconds....
  var timer = 30;
  var intervalId;

  //create function to run our clock....
  function run() {
  clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

//if timer hits === 0 show resault    
  }if(timer === 0) {
    $('#result').html("You Did Not Finish The Quiz - Please Restart")
  }

//Reduce timer # by 1...
  function decrement() {
  timer--;

//Show the number in the #timer tag...
  $("#timer").html("<h3>" + 'You Only Have ' + timer + ' Seconds Remaining To Finish The Quiz' + "</h3>");
   }
 
//  Execute the run function.
    run();

// create object with questions options and answers...    
var allQuestions = [{
  question: "May Queen, Wisley Crab, Foxwhelps and Lane's Prince Albert are all species of what?",
  answer: ["apple", "spider", "grape", "cavier"],
  correctAnswer: 0
},

{
  question: "What is sushi traditionally wrapped in?",
  answer: ["paper", "seaweed", "pancakes", "nothing"],
  correctAnswer: 1
},

{
  question: "If you had Lafite-Rothschild on your dinner table, what would it be?",
  answer: ["fancy center piece", "cheese", "flowers", "wine"],
  correctAnswer: 3
},

{
  question: "What is allspice alternatively known as?",
  answer: ["nutmeg", "chinese five spice", "rhubarb", "pimento"],
  correctAnswer: 3
},

{
  question: "What colour is Absynthe?",
  answer: ["blue", "yellow", "green", "pink"],
  correctAnswer: 2
},

{
  question: "Costing around $2,600 per pound and made only to order by Knipschildt, what is the name of this chocolate truffle?",
  answer: ["vanillocciolgio", "rockyroaacciolo", "chocopologie", "stawbiggala"],
  correctAnswer: 2
},

];
//create variable to keep track of question and correct answers
  var currentquestion = 0;
  var correctAnswers = 0;

//create function to turn string input to number parseInt()... 
  function playOptions() {
  $('#questionBox').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);

//variables to cycle through questions and answers together...
  var options = allQuestions[currentquestion].answer;
  var createHtml = '';

//for loop to cycle through questions and answers...
  for (var i = 0; i < options.length; i++) {
  createHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
  allQuestions[currentquestion].answer[i] + '</label></div><br/>';
  }

//post it to html...
  $('#answerBox').html(createHtml);
  $("#option0").prop('checked', true);
  };

//check to make sure answer is correct...
  function checkAnswer() {
    if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
    correctAnswers++;
    };
  };

//hide and reveal game play area by clicking a button...
  $(".jumbotron").hide();
  $('#start').click(function() {
  $(".jumbotron").fadeIn();
  $(this).hide();
  });

//execute playOptions()...
  playOptions();

//when the next button is clicked prevent default status, check answers, incredment current question...
  $("#next").click(function() {
  event.preventDefault();
  checkAnswer();
  currentquestion++;

//keep going if currentquestion is < the length of the array...  
  if (currentquestion < allQuestions.length) {
    playOptions();
    
//if the current question is equal to the last question in array...
    if (currentquestion == allQuestions.length - 1) {

//write to html...
      $('#next').html("Submit");
      $('#next').click(function() {
        
//hide game play to reveal results...
        $(".jumbotron").hide();
        $("#result").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! Nice Job! ").hide();
        
//hit'em with a nice fade...
        $("#result").fadeIn(1500);
      });

    };

  };
});
});