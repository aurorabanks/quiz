
// define the questions and answers
var questions = [
    {
        questionText: ['how big is the earth'],
        answers: ['24km', '6371km', 'small', '10000km'],
        correctAnswerIndex: 1,
    },

    {
        questionText: [' how shape is the earth'],
        answers: ['sphere', 'circle', 'square', '10000km'],
        correctAnswerIndex: 0
    }

    {
        questionText: [' how shape is the earth'],
        answers: ['sphere', 'circle', 'square', '10000km'],
        correctAnswerIndex: 0
    }

    {
        questionText: [' how shape is the earth'],
        answers: ['sphere', 'circle', 'square', '10000km'],
        correctAnswerIndex: 0
    }

]

// create variables to track the elements we're going to update

var questionElement = document.getElementById('question');
var answerOne = document.getElementById('answer-one');
var answerTwo = document.getElementById('answer-two');
var answerThree = document.getElementById('answer-three');
var answerFour = document.getElementById('answer-four');

// initialize the question index and user score 
var questionIndex = -1;
var usersScore = 0


// call this when the user clicks a button
function handleAnswer(answerIndex) {
    if (answerIndex === questions[questionIndex].correctAnswerIndex) {
        usersScore += 1;
    }

    nextQuestion()
}


function nextQuestion() {
    questionIndex+=1
    
    // if the user is at the end of the quiz
    if (questionIndex === questions.length) {
        // the quiz is over, hide the quiz and display the high score div
        questionIndex = 0;
        document.getElementById('highscore-screen').style.display = "block"
        document.getElementById('questions-screen').style.display = "none"
        document.getElementById('score').innerText = `Your score is ${usersScore} out of ${questions.length}` 
    } else {
        // update the quiz and answer text in the HTML
        questionElement.innerText=questions[questionIndex].questionText
        answerOne.innerText=questions[questionIndex].answers[0]
        answerTwo.innerText=questions[questionIndex].answers[1]
        answerThree.innerText=questions[questionIndex].answers[2]
        answerFour.innerText=questions[questionIndex].answers[3]
    }

   
}

nextQuestion();
