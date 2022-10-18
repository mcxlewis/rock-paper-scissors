
function getComputerChoice() { // randomizing computer choice
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
    return 'rock';
    } else if (randomNumber === 1) {
    return 'paper';
    } else { (randomNumber === 2); 
    return 'scissors'; 
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {  // lose conditions
        console.log('you lose! paper beats rock!');
        return 'you lose! paper beats rock!';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') { 
        console.log('you lose! rock beats scissors!');
        return 'you lose! rock beats scissors!';
    }
   else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('you lose! scissors beats paper!');
        return 'you lose! scissors beats paper!';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') { 
        console.log('you win! paper beats rock!');
        return 'you win! paper beats rock!'; 
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {  // win conditions
        console.log('you win! rock beats scissors!');
        return 'you win! rock beats scissors!';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') { 
        console.log('you win! scissors beat paper!');
        return 'you win! scissors beat paper!';
    }
    else {
        console.log('draw! try again!');
        return 'draw! try again!'; 
    } 
}

// --------------------------------

function game() {
    for (let i = 0; i < 5; i++) {
        let userChoice = prompt('rock, paper, or scissors?');
        const compChoice = getComputerChoice();
        playRound(userChoice, compChoice);
    }
}

game();