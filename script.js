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
    if (playerSelection === 'rock' || computerSelection === 'paper') {
        return 'you lose! paper beats rock!';
    }
} 
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
