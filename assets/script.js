// variables for page elements
// time and score
let timeEl = document.querySelector("p.time");
let secondsLeft = 75;
//let secondsLeft = 5;
let scoreEl = document.querySelector("p.score");

// user initials
let initialsEl = document.querySelector("#initials");

// sections
// section intro
const introEl = document.querySelector("#intro");

// section questions
//question section
const questionsEl = document.querySelector("#questions");
//where question goes
let questionEl = document.querySelector("#question");
// let totalQuestions = questions.length;
// let currentQuestionIndex = 0; // store the question the user is on; not sure I need

// section final
const finalEl = document.querySelector("#final");

// section highscores
const highscoresEl = document.querySelector("#highscores");
const scoreListEl = document.querySelector("#score-list");
let scoreList = [{ initials: "" }];

// div yaynay
const yaynayEl = document.querySelector("#yaynay");
const yayEl = document.querySelector("#yay");
const nayEl = document.querySelector("#nay");

// buttons
// start
const startBtn = document.querySelector("#start");
// answer button class
const ansBtn = document.querySelectorAll("button.ansBtn")
// answer1
const ans1Btn = document.querySelector("#answer1");
// answer2
const ans2Btn = document.querySelector("#answer2");
// answer3
const ans3Btn = document.querySelector("#answer3");
// answer4
const ans4Btn = document.querySelector("#answer4");
// submit-score
const submitScrBtn = document.querySelector("#submit-score");
// goback
const goBackBtn = document.querySelector("#goback");
// clearscores
const clearScrBtn = document.querySelector("#clearscores");
// view-scores
const viewScrBtn = document.querySelector("#view-scores");

// Object for question, answer, true/false
const questions = [ // array of objects
    {
        // question 0
        question: "Commonly used data types do NOT include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        // question 1
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    },
    {
        // question 2
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        // question 3
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: 2
    },
    {
        // question 4
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"], 
        correctAnswer: 3
    }
];
// how many questions they have answered
let questionCount = 0;

// Functions

// timer
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
        }
    }, 1000);
}

// start quiz
function startQuiz() {
    introEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount); // not sure this should go here
    //showQuestion();
}

// function to set question
// setQuestion takes in a count and displays the next question/answers
function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
        
        //added upon when asnwering a question
    }

    if (id > questions.length) {
        questionsEl.style.display = "none";
        finalEl.style.display = "block";
    }

}


// Senseless Notes....
// if (currentQuestionIndex < questions.length) {
//     id++;
// }

// if (event.target.matches("button")) {
//     event.preventDefault();
//     id++;
// }


// if (id > questions.length) {
//     questionsEl.style.display = "none";
//     finalEl.style.display = "block";
// }


// function showQuestion(index) {
//     const q = questions[index];

//     questionEl.textContent = q.question;
//     ans1Btn.textContent = q.answers.a;
//     ans2Btn.textContent = q.answers.b;
//     ans3Btn.textContent = q.answers.c;
//     ans4Btn.textContent = q.answers.d;
//     index++;

    // if (event.target.matches("button")) {
    //     event.preventDefault();
    //     id++;
    // }



    // if (id > questions.length) {
    //     questionsEl.style.display = "none";
    //     finalEl.style.display = "block";
    // }

//}
// function to check answer and then move to next question
function checkAnswer(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.value);
    //id of question they clicked
    //answer we are on
    console.log(event.target.id);
    console.log(questions[questionCount].correctAnswer);
    //compare to the right answer
    if (questions[questionCount].correctAnswer == event.target.value) {
        console.log("i'm true");
        yaynayEl.style.display = "block";
        yayEl.style.display = "block";
    };
    questionCount++;

    setQuestion(questionCount);
    //figure out how to compare the correct answer vs the ID of the button i clicked.
    //parseInt? redfine to be arrays? have if else -question 1, and they select question a etc
    //looks at last character of id parse int last character and compare that... 
    //after figure out answer, need to respond right or wrong then add to question count and setQuestion with new count
}

function addScore(event) {
    event.preventDefault();
    let init = initialsEl.value;
    let li = document.createElement("li");
    li.id = secondsLeft;
    li.textContent = scoreList.length;
    scoreList.push({ initials: init })
    scoreListEl.append(li);

    finalEl.style.display = "none";
    highscoresEl.style.display = "block";

    //not working: "cannot read property append of null at HTMLButtonEvent.addScore"
    //need to add to local storage...

    storeScores();
    displayScores();
}

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function displayScores() {
    // Get stored scores from localStorage
    // Parsing the JSON string to an object
    let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    // If scores were retrieved from localStorage, update the scorelist array to it
    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}



// EventListeners
// Start timer and display first question when click start quiz
startBtn.addEventListener("click", startQuiz);

// eventListener for answer button? 
// not sure if this is setQuestion or a bigger wrapper function

ansBtn.forEach(item => {
    item.addEventListener('click', checkAnswer);
  });

// Add score
submitScrBtn.addEventListener("click", addScore);


// Pseudocode
    // startQuiz: click start quiz
        // x-start timer
        // moves to question 1
            // set question
            // set answers 1 through 4
        // x-set style.display to none for intro
        // x-set display for questions to show
    // click an answer choice - function call to check the question array for answers if button is the right one
        // office hours notes
            // increment index number by 1 re-run and update the question you want to display
            // pass to which item in the array to access.
            // update view that way.when click on the button and increment to the next one. 
            // pass in as an argument to that function.
            // store question they are on now. 
            // event listener to the buttons and when that clicked fires the event.
        // question count
        // if correct, show yay
        // if incorrect, show nay
        // if incorrect, deduct 10 from time
        // set to next question
            // set question
            // set answers 1 through 4
            // loop through to last question
    // After last question OR time reaches 0
        // show "final" section
        // store score (time) to local storage
    // click submit for initials
        // show high scores page
        // add latest entry to high scores/object?
        // High scores should display as an ordered list descending
    // click go back button
        // go back to intro section
    // click clear scores button
        // clear the high scores array/object
    // click view high scores
        // go to high scores section

    // JSON stringify and parse to save the collection
    // get all scores, add new score to that
    // reset localStorage
    //static key as first param "scores" thena all scores as a list
    // need to create a score list and then the li gest appended as a child.
    // ojbect.keys
    // sort w3 schools examples on score