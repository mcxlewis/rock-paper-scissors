function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
    return 'rock';
    } else if (randomNumber === 1) {
    return 'paper';
    } else { 
        (randomNumber === 2); 
    return 'scissors'; 
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'you lose! paper beats rock!';
    } if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'you lose! rock beats scissors!';
    } if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'you lose! rock beats paper!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'you win! rock beats scissors!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'you win! scissors beat paper!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'you win! paper beats scissors!';
    } else { (playerSelection === computerSelection);
        return 'draw! try again!' 
    } }
let playerSelection = prompt ('rock, paper, or scissors?')
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));