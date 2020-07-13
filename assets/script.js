// variables for page elements
    // time and score
    let timeEl = document.querySelector("p.time");
    let secondsLeft = 75;
    let scoreEl = document.querySelector("p.score");
    
    // user initials
    let initialsEl = document.querySelector("#initials");
    
    // sections
        // section intro
        const introEl = document.querySelector("#intro");
        // section questions
        const questionsEl = document.querySelector("#questions");
        let questionEl = document.querySelector("#question");
        // section final
        const finalEl = document.querySelector("#final");
        // section highscores
        const highscoresEl = document.querySelector("#highscores");
        // div yaynay
        const yaynayEl = document.querySelector("#yaynay");
    
    // buttons
        // start
        const startBtn = document.querySelector("#start");
        // answer button class
        const ansBtn = document.querySelector("button.ansBtn")
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
    const questions = [
        {
            // question 0
            question: "Commonly used data types do NOT include:",
            answers: {
                a: "1. strings",
                b: "2. booleans",
                c: "3. alerts",
                d: "4. numbers"
            },
            correctAnswer: "c"
        },
        {
            // question 1
            question: "The condition in an if / else statement is enclosed within ____.",
            answers: {
                a: "1. quotes",
                b: "2. curly brackets",
                c: "3. parentheses",
                d: "4. square brackets"
            },
            correctAnswer: 1
        },
        {
            // question 2
            question: "Arrays in Javascript can be used to store ____.",
            answers: {
                a: "1. numbers and strings",
                b: "2. other arrays",
                c: "3. booleans",
                d: "4. all of the above"
            },
            correctAnswer: 3
        },
        {
            // question 3
            question: "String values must be enclosed within ____ when being assigned to variables.",
            answers: {
                a: "1. commmas",
                b: "2. curly brackets",
                c: "3. quotes",
                d: "4. parentheses"
            },
            correctAnswer: 2
        },
        {
            // question 4
            question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            answers: {
                a: "1. Javascript",
                b: "2. terminal/bash",
                c: "3. for loops",
                d: "4. console.log"
            },
            correctAnswer: 3
        }
    ];

// Functions

    // timer
    function setTime() {
        var timerInterval = setInterval(function() {
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

        setTime();
        setQuestion(); // not sure this should go here
    }

    // function to check answer and then move to next question
    function setQuestion(id) {
        questionEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers.a;
        ans2Btn.textContent = questions[id].answers.b;
        ans3Btn.textContent = questions[id].answers.c;
        ans4Btn.textContent = questions[id].answers.d;

    }

// EventListeners
    // Start timer and display first question when click start quiz
    startBtn.addEventListener("click", startQuiz);

    // eventListener for answer button? 
    // not sure if this is setQuestion or a bigger wrapper function
    ansBtn.addEventListener("click", setQuestion);


// Pseudocode
    // startQuiz: click start quiz
        // x-start timer
        // moves to question 1
            // set question
            // set answers 1 through 4
        // x-set style.display to none for intro
        // x-set display for questions to show
    // click an answer choice - function call to check the question array for answers if button is the right one
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