const choices = document.querySelectorAll('div.choices button');
const result = document.querySelector('#winner')
const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')
const rock = document.querySelector('#Rock')
const paper = document.querySelector('#Paper')
const scissors = document.querySelector('#Scissors')
let answers = ["Rock", "Paper", "Scissors"];

rock.addEventListener("click", getPlayerChoice);
paper.addEventListener("click", getPlayerChoice);
scissors.addEventListener("click", getPlayerChoice);


function random() {
    return answers[Math.floor(Math.random() * 3-1) + 1];
}

console.log(random())

paper.addEventListener("click", getPlayerChoice);

choices.onafterprint = function choiceListen() {
    choices.forEach(button => button.addEventListener('click', getPlayerChoice))
}

function getPlayerChoice(button) {
    return console.log(button.target.id)
}