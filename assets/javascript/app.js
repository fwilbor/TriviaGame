var triviaBank = [

    {


        // For our Trivia Bank we created an Object inside of an Array.

        question: "What is the name for a dog created by crossing a Labrador Retriever and a Poodle?",
        answers: ["Labradoodle", "Labra - Poo", "Poo - Lab", "DoraPoodle"],
        correctAnswer: "Labradoodle"
    }, {
        question: "The Chihuahua is a breed of dog believed to originate from what country?",
        answers: ["France", "Spain", "United States", "Mexico"],
        correctAnswer: "Mexico"

    },

    {

        question: "What is the most popular breed of dog in the United States?",
        answers: ["French Bulldog", "Golden Retriever", "Labrador", "German Shephard"],
        correctAnswer: "Labrador"


    },

    {
        question: "In the United States which breed of dog is commonly knows as a Firehouse Dog?",
        answers: ["Greyhound", "Rottweiler", "Dalmatian", "Collie"],
        correctAnswer: "Dalmatian"


    },

    {
        question: "How many chambers are there in a dog's heart?",
        answers: ["Four", "Eight", "Two", "Thirteeen"],
        correctAnswer: "Four"


    },

    {
        question: "A Puggle is a cross between which two dog breeds?",
        answers: ["Pug and Cocker Spaniel", "Pug and a Beagle", "Pitbull and a Beagle", "A Puggle is a Pudgie Beagle"],
        correctAnswer: "Pug and a Beagle"


    },

    {
        question: "Which breed of dog doesn't bark?",
        answers: ["Pug", "Irish Setter", "Cane Corso", "Basenji"],
        correctAnswer: "Basenji"


    },

    {
        question: "Which breed of dog was Scooby Doo?",
        answers: ["St.Benard", "Great-Dane", "Labrador", "German-Shephard"],
        correctAnswer: "Great-Dane"

    }];

console.log(triviaBank);



var gifArray = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8"];

var currentQuestion;
var correctlyAnswered = 0;
var incorrectlyAnswered = 0;
var unanswered;
var seconds;
var time;
var answered;
var userSelect;
var messages = {
    correct: "You got it right, Totally!",
    incorrect: "No, that's Totally wrong.",
    endTime: "You're Out of time!",
    finished: "Alright! Let's see how you did."

}





$(document).ready(function () {
    $(document).on("click", "#answers", function () {
        // console.log($(this).attr('data-name'))
    })

    var pageLoad = function () {
        $("#timer").hide();
        $("#nextQuestion").hide();
        $("#answers").hide();

    }

    pageLoad();

    // When a user clicks a check box then delete the specific content
    // (NOTE: Pay attention to the unusual syntax here for the click event.
    // Because we are creating click events on "dynamic" content, we can't just use the usual "on" "click" syntax.)
    $(document.body).on("click", ".btn-answer", function () {

        // Get the number of the button from its data attribute and hold in a variable called clickButton
        var clickButton = $(this).attr("data-name");
        console.log(clickButton);
        if (clickButton === correctAnswer) {
            alert("You Got it Right!")
            correctlyAnswered++;

        } else {
            alert("You got it Wrong!")
            incorrectlyAnswered++;
        }
        console.log(correctlyAnswered);
        console.log(incorrectlyAnswered);
        nextQuestion(count)
    });






},
    // Next we create a Start Button to Activate Game when Clicked
    // Player is Given a 1st Trivia Question in Array and Timer begins
    // If Player guesses right answer before time expires they go to the next question
    // If player guesses right answer or time expires Picture is shown with Correct Answer.
    // Else player gets incorrect. Time Resets on each Question 
    // Results are shown at the end of the game.

    //Start Game Function

    // var startGame = funtion() {

    // };


    // var answerCheck = function() {

    // };


    // var results = function() {


    // };




    //Create Start Button to Activate Game when Clicked
    // Player is given the 1st Trivia Question in triviaBank Array and Timer begins
    // If Player guesses right answer before time expires they go to the next question
    // If player guesses right answer or time expires Picture is shown with Correct Answer.
    // Else player gets incorrect. Time Resets on each Question 
    // Results are shown at the end of the game.

    $(document).on("click", "#start", function () {
        console.log('Start button being clicked!!');
        $("#start").hide();
        $("#heading").hide();
        $("#nextQuestion").append("<h4>Questions from object to show here in Order (looped)</h4>");
        $("#timer").show();
        $("#nextQuestion").show();
        $("#answers").show();
        countdown();
        nextQuestion(count);





    }));





var countdown = function () {
    seconds = 10;
    $('#timer').html('<h3>Time Remaining: ' + seconds + '</h3>');
    answered = true;
    //sets timer to go down
    time = setInterval(showCountdown, 1000);
    // If statement goes in countdown function 

}
function showCountdown() {
    seconds--;
    $('#timer').html('<h3>Time Remaining: ' + seconds + '</h3>');
    if (seconds < 1) {
        clearInterval(time);
        answered = false;
        // answerPage();
    }

}


// Count will keep track of the index of the currently displayed Question.
var count = 0;

function nextQuestion(int) {
    //  TODO: Increment the count by 1.

    countdown();
    clearInterval(time);
    $("#nextQuestion").html(triviaBank[int].question);

    $("#answers").empty();
    correctAnswer = triviaBank[int].correctAnswer

    for (i = 0; i < triviaBank[int].answers.length; i++) {


        var ansButton = $("<button>")
        ansButton.addClass("btn-answer");
        //adds a data attribute
        ansButton.attr("data-name", triviaBank[int].answers[i]);
        ansButton.html(triviaBank[int].answers[i]);
        $("#answers").append(ansButton)



    }

    count++
}


function stopTimer() {
    clearInterval(intervalId);






    // PsuedoCode Buttons to click with correct button choice only one button = True (correct) all 
    // other buttons = False
    // Buttons must match String in Order to be True






    // $('#nextQuestion').text(triviaBank[int].question);
    // $("#ansA").text(triviaBank[int].answers[0]);
    // $("#ansB").text(triviaBank[int].answers[1]);
    // $("#ansC").text(triviaBank[int].answers[2]);
    // $("#ansD").text(triviaBank[int].answers[3]);


}
newFunction();

$("#currentQuestion")


function newFunction() {
    console.log(nextQuestion);
}
// Set Each Answer in Index to Assigned Button. If Correct Button Chosen say Correct,  if not say incorrect

// Set Results Function to Tally Score 

var endGame = function () {
    stopTimer();



}

if (triviaBank === (triviaBank).length || seconds === 0) {

    // adds results of game (correct, incorrect, unanswered) to the page
    $("#answerPage")
        .html('<h3>Thank you for playing!</h3>' +
            '<p>Correct: ' + correctlyAnswered + '</p>' +
            '<p>Incorrect: ' + incorrectlyAnswered + '</p>' +
            '<p>Please play again!</p>');




}