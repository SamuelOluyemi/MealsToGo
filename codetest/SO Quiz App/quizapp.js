//{} = object   []= array //
var questions = [
    {question: "Which NBA Franchise won the Championship in 2002?",
     choices: ["San Antonion Spurs", "Celtics", "LA Lakers", "GS Warriors"],
     correctAnswer: 2
    },
    {question: "Which NBA Franchise won the Championship in 2003?",
     choices: ["San Antonion Spurs", "Celtics", "LA Lakers", "GS Warriors"],
     correctAnswer: 0
    },
    {question: "Which NBA Franchise won the Championship in 2006?",
     choices: ["San Antonion Spurs", "Celtics", "LA Lakers", "Miami Heat"],
     correctAnswer: 3
    },
    {question: "Which NBA Franchise won the Championship in 2008?",
     choices: ["San Antonion Spurs", "Celtics", "LA Lakers", "GS Warriors"],
     correctAnswer: 1
    },
    {question: "Which NBA Franchise won the Championship in 2011?",
     choices: ["Dallas Mavericks", "Celtics", "LA Lakers", "GS Warriors"],
     correctAnswer: 0
    },
    {question: "Which NBA Franchise won the Championship in 2015?",
     choices: ["San Antonion Spurs", "Celtics", "LA Lakers", "GS Warriors"],
     correctAnswer: 3
    },
    {question: "Which of these NBA Coaches has won only one Championship?",
     choices: ["Pat Riley", "Tyronn Lue", "Ime Udoka", "Steve Kerr"],
     correctAnswer: 1
    },
    {question: "Which of these NBA Franchises has never won a Championship?",
     choices: ["Portland Trail Blazers", "Utah Jazz", "76ers", "Sacremento Kings"],
     correctAnswer: 1
    }
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {
            value = $("input[type='radio']:checked").val();
            if(value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();
                if(value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
                currentQuestion++;
                if(currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });


//     displayPreviousQuestion();
//     $(this).find(".quizMessage").hide();
//     $(this).find(".prevButton").on("click", function () {
//         if (!quizOver) {
//                 currentQuestion--;
//                 if(currentQuestion < questions.length) {
//                     displayPreviousQuestion();
//                 }
//             }
//          else {
//             quizOver = false;
//             $(document).find(".prevButton").text("Previous Question");
//             resetQuiz();
//             displayPreviousQuestion();
//             hideScore();
//         }
//     });

});


function displayCurrentQuestion() {
    console.log("In display current Question");
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    //Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all currently <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i=0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}
// function displayPreviousQuestion() {
//     console.log("In display previous Question");

//     var question = questions[currentQuestion - 1].question;
//     var questionClass = $(document).find(".quizContainer > .question");
//     var choiceList = $(document).find(".quizContainer > .choiceList");
//     var numChoices = questions[currentQuestion - 1].choices.length;

//     //Set the questionClass text to the current question
//     $(questionClass).text(question);

//     // Remove all currently <li> elements (if any)
//     $(choiceList).find("li").remove();

//     var choice;
//     for (i=0; i < numChoices; i++) {
//         choice = questions[currentQuestion - 1].choices[i];
//         $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
//     }
// }

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}


startTime
gameDuration