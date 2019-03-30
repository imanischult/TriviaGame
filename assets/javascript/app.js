//Create an array of objects to hold your questions for the trivia game

var questionArray = [
    {
        question: "What is Earth's largest continent?",
        choiceA: "Antarctica",
        choiceB: "Africa",
        choiceC: "Asia",
        choiceD: "North America",
        correctAnswer: "C"
    },
    {
        question: "What country has the most natural lakes?",
        choiceA: "United States", 
        choiceB: "Canada",
        choiceC: "Australia",
        choiceD: "Greenland",
        correctAnswer: "Canada"
    },
    {
        question: "What is the driest place on Earth?",
        choiceA: "Sahara Desert",
        choiceB: "McMurdo Dry Valley, Antarctica",
        choiceC: "Death Valley, California",
        choiceD: "Arabian Desert",
        correctAnswer: "McMurdo Dry Valley, Antarctica"
    }
];

// ******************** CREATE GLOBAL VARIABLES ******************** //


// REFERENCES TO THE DOM //

const $start = $("#start");
const $triviaGame = $("#triviaGame");
const $question = $("#question");
const $qImg= $("#qImg");
const $choiceA = $("#A");
const $choiceB = $("#B");
const $choiceC = $("#C");
const $choiceD = $("#D");
const $counter = $("#counter");
const $bTimeGauge = $("#bTimeGauge");
const $timeGauge = $("#timeGauge");
const $progress = $("#progress");
const $score = $("#score");

// Global variables 
const lastQuestionIndex = questionArray.length - 1;
var runningQuestionIndex = 0;


// Render questions

function renderQuestion () {
    let userQuestion = questionArray[runningQuestionIndex];

    $question.text(userQuestion.question);
    $choiceA.text(userQuestion.choiceA);
    $choiceB.text(userQuestion.choiceB);
    $choiceC.text(userQuestion.choiceC);
    $choiceD.text(userQuestion.choiceD);

    $start.style.display = "none";
    renderQuestion();
    $triviaGame.style.display = "block"

}

console.log(renderQuestion());
// var questionTime = 15

// var gaugeWidth = 150;

// var count = 0;

// var gaugeProgressUnit = gaugeWidth/questionTime;

// var timer = setInterval(counterRender,1000);



// // ******************** CREATE GLOBAL FUNCTIONS ******************** //


// // This function will render our next question
// function renderQuestion () {
//     q = questionArray[runningQuestionIndex];
//     // Write everything to html //
//     }


// // This function will check if we have a next question or not. If we do, then we will proceed; if we don't, then the timer is cleared and the users score is rendered

// var checkNextQuestion = function() {
//     if (runningQuestionIndex < lastQuestionIndex) {
//         count = 0;
//         runningQuestionIndex++;
//         renderQuestion(); // don't forget to create this function
    
//     } else {
//         clearInterval(timer); // don't forget this one either
//         scoreRender();
//     }
// }


// // This function holds the game logic for the counter, or the timer. It sets guidelines on how long the user has to answer the question, and what happens if that time runs out //
// function counterRender() {
//     if (count <= questionTime ) {
//         counterRender.innerHTML = count;
//         timGauge.style.width = gaugeProgressUnit * count + "px" ;
//         count++;
    
//     } else {
//         answerIsWrong(); // Don't forget to create this function!
//         checkNextQuestion(); // Created! :)
//     }

// }


// // This function checks for the correct answer //
// function checkAnswer (answer) {
//     if (questionArray[runningQuestionIndex].correct == correctAnswer) {
//         answerIsCorrect(); // Create a function for this 
    
//     } else {
//         answerIsWrong(); // Create a function for this
//         checkNextQuestion();
//     }
// }

