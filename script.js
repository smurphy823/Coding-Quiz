//Set Variables
var startBtn = document.getElementById("startBtn");
var infoBox = document.getElementById("infoBox");
var answerBox = document.getElementById("answerBox")
var infoTitle = document.getElementById("infoTitle");
var timer = document.getElementById("timer");
var highscores = document.getElementById("highscores");
var resultDisplay = document.getElementById("resultDisplay");

var q = 0;
var r = 0;
var w = 0;
var secondsLeft = 60;

var questions = [{
    question: "What does HTML stand for ?",
    choices: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Tool Multi Language",
        "Hyper Text Malicious Language"

    ],
    answer: "Hyper Text Markup Language"

},

{
    question: "What does CSS stand for?",
    choices: [
        "Common Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
        "Connection Style Sheet"

    ],
    answer: "Cascading Style Sheet"

},

{
    question: "Which of these is NOT a programming language?",
    choices: [
        "Hypertext Preprocessor",
        "Python",
        "Jamma",
        "Java"

    ],
    answer: "Jamma"
},

{
    question: "What is computer programming?",
    choices: [
        "Sigining into a webpage",
        "A list of functions",
        "Browsing on a computer",
        "Telling a computer what to do"

    ],
    answer: "Telling a computer what to do"
},

{
    question: "What are people who write computer code?",
    choices: [
        "Geeks",
        "Manufacturer",
        "Programmers",
        "Professor"

    ],
    answer: "Programmers"
}


]

startBtn.addEventListener("click", function () {
    builtQuestionCard();
    setTime();
    resultDisplay.textContent = "Let's PLAY!! You have 5 QUESTIONS";


})
function builtQuestionCard() {


    answerBox.innerHTML = "";
    infoTitle.textContent = questions[q].question;
    questions[q].choices.forEach(function (choice) {
        var button = document.createElement("button");
        button.textContent = choice;
        button.setAttribute("value", choice);
        button.setAttribute("style", "height: 60px; width:100% ; font-size: 12px;  justify-content:center; align-items:center; padding: 5px; margin: 5px; cursor: pointer; border-radius: 5px; border: 1px solid #DDA0DD;");
        button.onclick = evaulateAnswer;
        answerBox.appendChild(button);
        startBtn.remove();



    })

}
//set style for result div
resultDisplay.setAttribute("style", "color: #DDA0DD; font-weight: 400; ");


function evaulateAnswer() {
    if (this.value === questions[q].answer) {
        r++;


        resultDisplay.textContent = "You are CORRECT!!! You have " + r + " RIGHT " + w + " WRONG OUT OF 5";



    } else {
        w++;
        secondsLeft -= 10;
        resultDisplay.textContent = "You are CORRECT!!! You have " + r + " RIGHT " + w + " WRONG OUT OF 5";

    }
    q++;
    if (q === questions.length) {
        infoTitle.textContent = "GAME OVER!!!";
        infoTitle.setAttribute("style", "color: red;");
        resultDisplay.textContent = "Congratulation! You have " + r + " RIGHT and " + w + " WRONG out of 5 questions";

        answerBox.innerHTML = "";

        var nameLabel = document.createElement("label");
        nameLabel.textContent = "Enter INITIALS: "
        nameLabel.setAttribute("style", "display: inline-block; width: 100%; height: 25%; margin-bottom:5px; font-size: 15px;");
        answerBox.appendChild(nameLabel);

        var nameInput = document.createElement("input");
        // nameInput.setAttribute("type", Text );
        nameInput.setAttribute("id", "userInput");
        nameInput.setAttribute("style", "margin-bottom: 5px; width: 100%; height: 25%; font-size: 15px; text-transform: uppercase");
        answerBox.appendChild(nameInput);





        var submitBtn = document.createElement("button");
        submitBtn.textContent = "Submit";
        submitBtn.setAttribute("class","submitBtn");
        submitBtn.setAttribute("style", "height: 40px; width: 30%; border: 1px solid #DDA0DD; background: #DDA0DD; border-radius: 5px;color: #DDA0DD; font-size: 15px; font-weight: 500;cursor: pointer;");
        //answerBox.setAttribute("style", "display:flex");
        answerBox.appendChild(submitBtn);

        //add click event to capture player intials and time left
        submitBtn.addEventListener("click", function () {

            var score = secondsLeft * r
            var userInput = document.querySelector("#userInput").value;

            var highscore = { userInput, score };
            var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
            highscores.push(highscore)

            localStorage.setItem("highscores", JSON.stringify(highscores));

            window.location.href = "highscores.html";
        });


    } else {
        builtQuestionCard();
    }
}

//timer function to run countdown 
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left!!";

        if (secondsLeft === 0 || q === questions.length) {
            clearInterval(timerInterval);
            var timerResult = document.createElement("div");
            timerResult.textContent = "You FINISHED the game with  " + secondsLeft + " seconds left!!";
            answerBox.appendChild(timerResult);
            infoTitle.textContent = "GAME OVER!!!";
            infoTitle.setAttribute("style", "color: purple;");
            resultDisplay.textContent = "Congratulation! You have " + r + " RIGHT and " + w + " WRONG out of 5 questions";
    
            answerBox.innerHTML = "";
    
            var nameLabel = document.createElement("label");
            nameLabel.textContent = "Enter INITIALS: "
            nameLabel.setAttribute("style", "display: inline-block; width: 100%; height: 25%; margin-bottom:5px; font-size: 15px;");
            answerBox.appendChild(nameLabel);
    
            var nameInput = document.createElement("input");
            // nameInput.setAttribute("type", Text );
            nameInput.setAttribute("id", "userInput");
            nameInput.setAttribute("style", "margin-bottom: 5px; width: 100%; height: 25%; font-size: 15px; text-transform: uppercase");
            answerBox.appendChild(nameInput);
    
            var submitBtn = document.createElement("button");
            submitBtn.textContent = "Submit";
            submitBtn.setAttribute("class","submitBtn");
            submitBtn.setAttribute("style", "height: 40px; width: 30%; border: 1px solid #800080; background: #DDA0DD; border-radius: 5px;color: #800080; font-size: 15px; font-weight: 500;cursor: pointer;");
            //answerBox.setAttribute("style", "display:flex");
            answerBox.appendChild(submitBtn);
    
            //add click event to capture player intials and time left
            submitBtn.addEventListener("click", function () {
    
                var score = secondsLeft * r
                var userInput = document.querySelector("#userInput").value;
    
                var highscore = { userInput, score };
                var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
                highscores.push(highscore)
    
                localStorage.setItem("highscores", JSON.stringify(highscores));
    
                window.location.href = "highscores.html";
            });
    
    
        
        }
    }, 1000);

}