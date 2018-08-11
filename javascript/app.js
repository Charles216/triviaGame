// Create an object to hold the question, choices and answers...
var allQuestions = [{
    question: "If you had Lafite-Rothschild on your dinner table, what would it be?",
    choices: ["fancy center piece", "cheese", "flowers", "wine"],
    correctAnswer: 4
},
{
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
    answer: ["vanillocciolgio", "rockyroaacciolo", "chocopologie", "stawberiggala"],
    correctAnswer: 2
},
];
// create var to count the correct answers
var currentQuestion = 0;
var correctAnswers = 0;


//explain code here
function playOptions() {
    $("#question").html(parseInt(currentQuestion) + 1 + "." allQuestions[currentQuestion].question);    
    
    //explain code here
    var options = allQuestions[currentQuestion].answer;
    var formHtml = '';
    for(var i = 0; i < options.length; i++){
        formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' + allQuestions[currentQuestion].choices[i] + '</label></div><br/>';
    }
    
    //explain code here
    $('#form').html(formHtml);
    $('#option0').prop('checked', true);
    };

    //explain this code here
    fucntion checkAnswer() {
        if ($("input[name=option]:checked").val() == allQuestions[currentQuestion].correctAnswer){
           correctAnswer++; 
        };
    };
    
    //explain code here
    $(document).ready(function() {
        //explain the code here...
        $(".jumbotron").hide();
        $('#start').click(function(){
            $(".jumbotron").fadeIn();
            $(this).hide();
        });

        $(function(){
            $("#progressbar").progressbar({
                max: allQuestions.length - 1,
                value: 0
            });
        });
        //call function
        setupOptions();
        
        //explain the code
        $("next").click(function() {
            event.preventDefault();
            checkAnswer();
            currentQuestion++;
            $(function(){
                $('#progressbar').progressbar({
                    value: currentQuestion
                });
            }); 
            if (currentQuestion < allQuestions.length) {
                setupOption();
                if (currentQuestion == allQuestions.length - 1) {
                    $('#next').html("Submit");
                    $("next").click(function(){
                        $(".jumbotron").hide();
                        $("#result").html("You answered " + correctAnswer + " out of " + currentQuestion + " Awesome job, Human! ").hide();
                        $("#result").fadeIn(1250);
                    });
                };
            };

        });

    });