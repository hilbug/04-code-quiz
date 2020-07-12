// variables for page elements
    // time... let timeEl = document.querySelector("#time");
    // score
    // user initials
    // sections
        // section intro
        // section questions
        // section final
        // section highscores
        // div yaynay
    // buttons
        // start 
        // answer1
        // answer2
        // answer3
        // answer4
        // submit-score
        // goback
        // clearscores
        // view-scores
    // Object for Question, answer, true/false

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