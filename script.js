const choices = document.querySelectorAll('div.choices button');
const result = document.querySelector('#Winner')
const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')
const rock = document.querySelector('#Rock')
const paper = document.querySelector('#Paper')
const scissors = document.querySelector('#Scissors')
const reset = document.querySelector('#Reset')
const playerChoice = document.querySelector('#playerChoice')
const computerChoice = document.querySelector('#computerChoice')
let answers = ["Rock", "Paper", "Scissors"];

//choice randomizer
function random() {
    return answers[Math.floor(Math.random() * 3-1) + 1];
}


// event listeners for buttons
rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);
reset.addEventListener("click", resetAll)

// score changes
function setScores () {
    playerScore.innerHTML = player;
    computerScore.innerHTML = computer;
}

//set scores
var player = 0
var computer = 0
window.onload = setScores();


function playRound(button) {
// call random
    var random = answers[Math.floor(Math.random() * 3-1) + 1];
// set choices in results

    computerChoice.innerHTML = random
    playerChoice.innerHTML = button.target.id

    result.innerHTML= winner(button.target.id, random)
    setScores()
    
    if (player == 5) {
        alert("You Won! First to 5!")
        resetAll()
    } else if (computer == 5) {
        alert("You Lost, the computer got to 5 first :-(")
        resetAll()
    }
}


//find winner
function winner (a,b) {
    var awins = 0;
    var alosses = 0;
    var ties = 0;

    if(a == b) ties++;
    else {
             if(a=="Rock" && b=="Scissors") awins++;
        else if(a=="Rock" && b=="Paper") alosses++;
        else if(a=="Paper" && b=="Scissors") alosses++;
        else if(a=="Paper" && b=="Rock") awins++;
        else if(a=="Scissors" && b=="Paper") awins++;
        else if(a=="Scissors" && b=="Rock") alosses++;
    }

    if (awins > 0) {
        player ++
        return "You Win"
    }

    if (alosses > 0) {
        computer ++
        return "You Lose"
    }

    if (ties > 0) {
        return "It's a tie"
    }
}

//reset
function resetAll() {
    player = 0;
    computer = 0;
    result.innerHTML = " "
    setScores()
}