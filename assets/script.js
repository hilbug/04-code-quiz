// variables for page elements
    // time
    let timeEl = document.querySelector("#time");
   
    // user initials
    let initialsEl = document.querySelector("#initials");
    // sections
        // section intro
        const introEl = document.querySelector("#intro");
        // section questions
        const questionsEl = document.querySelector("#questions");
        // section final
        const finalEl = document.querySelector("#final");
        // section highscores
        const highscoresEl = document.querySelector("#highscores");
        // div yaynay
        const yaynayEl = document.querySelector("#yaynay");
    // buttons
        // start
        const startBtn = document.querySelector("#start");
        // answer1
        const ans1Btn = document.querySelector("#answer1");
        // answer2
        const ans2Btn = document.querySelector("#answer2");
        // answer3
        const ans3Btn = ocument.querySelector("#answer3");
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
    
    // Object for Question, answer, true/false

    // Set via a function?
         // score - this will either be 0 or the left over time. DO we need this or can we just use time?

//Events
    // click start quiz
        // moves to question 1
            // set question
            // set answers 1 through 4
        // start timer
    // click an answer choice
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