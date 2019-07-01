$(document).ready(function () {

    var pageLoad = function () {
        $("#timer").hide();
        $("#randomQuestion").hide();
        $("#answers").hide();
    }

    pageLoad();


    var triviaBank = [{


        // For our Trivia Bank we created an Object inside of an Array.

        question: "What is the name for a dog created by crossing a Labrador Retriever and a Poodle?",
        answers: ["Labradoodle", "Labra - Poo", "Poo - Lab", "DoraPoodle"],
        correctAnswer: "Labradoodle"
    },{
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


    var gifArray = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8"];

    var currentQuestion;
    var correctAnswer;
    var incorrectAnswer;
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


    // Next we create a Start Button to Activate Game when Clicked
    // Player is Given a Random Trivia Question and Timer begins
    // If Player guesses right answer before time expires they go to the next question
    // Else player gets incorrect. Time Resets on each Question 
    // 4 Correct Answers wins the Game

    //Start Game Function

    // var startGame = funtion() {

    // };


    // var answerCheck = function() {

    // };


    // var results = function() {


    // };


    // $(document).on("click", "#start", function () {
    //     console.log('Start button being clicked!!');
    //     $("#randomQuestion").append("<h4>Questions from object to show here randomly (looped)</h4>");
        
    // }
