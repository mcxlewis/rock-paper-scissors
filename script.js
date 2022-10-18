function getComputerChoice() { // randomizing computer choice
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
    return 'rock';
    } 
    else if (randomNumber === 1) {
    return 'paper';
    } 
    else { (randomNumber === 2); 
    return 'scissors'; 
    }
}

let playWins = 0;
let compWins = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {  // lose conditions
        console.log('paper beats rock!');
        compWins++;
        return 'paper beats rock!';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') { 
        console.log('rock beats scissors!');
        compWins++;   
        return 'rock beats scissors!';
    }
   else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('scissors beats paper!');
        compWins++;
        return 'scissors beat paper!';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {  // win conditions
        console.log('paper beats rock!');
        playWins++;
        return 'paper beats rock!'; 
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('rock beats scissors!');
        playWins++;
        return 'rock beats scissors!';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') { 
        console.log('scissors beat paper!');
        playWins++;
        return 'scissors beat paper!';
    }
    else {
        console.log('draw!');
        return 'draw!';
    } 
}

// --------------------------------

function game() {
    for (let i = 0; i < 5; i++) {
        let userChoice = prompt('rock, paper, or scissors?');
        const compChoice = getComputerChoice();
        playRound(userChoice, compChoice);
    }
    if (compWins < playWins) {
        console.log('----------');
        console.log('congrats! you won! the score was ' + playWins + ' - ' + compWins);
        return 'congrats! you won!';
    }
    else if (compWins > playWins) {
        console.log('----------');
        console.log('bummer! you lost! the score was ' + compWins + ' - ' + playWins);
        return 'bummer! you lost!';
    }
    else {
        console.log('----------');
        console.log('draw! play again?');
        return 'draw! play again?';
    }
}

game();