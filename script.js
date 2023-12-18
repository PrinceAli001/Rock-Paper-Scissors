//all the variables i'll be needing
let playerChoice;
let computerChoice;
let  playerScore = 0;
let computerScore = 0;




// Algorithm for the computer's choice
// if the rounded random number = 1 then return rock 
// if the rounded random number = 2 then return paper
// if the rounded random number = 3 then return scissors


function getComputerChoice() {
    if ((Math.floor(Math.random()*3) + 1 == 1)) {
        return `Rock`;
    } else if ((Math.floor(Math.random()*3) + 1 == 2)) {
        return `Paper`
    } else {
        return `Scissors`
    }
}


// Algorithm for a single round
// using the inputs from both the user and computer
// create if statements for ties, wins and losses
// it should return a statement depending on the choices
// and increases the scores depending on the if's condition

function playRound(playerSelection,computerSelection) {
    playerChoice = prompt('Rock,Paper,Scissors ?');
    computerChoice = getComputerChoice();
   

    if (playerChoice == 'Rock' && computerChoice == 'Rock') {
        return `It's a tie, rock can't beat rock silly
        Player's Score: ${playerScore}
        Computer's Score: ${computerScore}`;
    } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
        return `You lose! ,paper beats rock
        Player's Score: ${playerScore}
        Computer's Score: ${computerScore += 1}`;
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        return `You win ,rock beats scissors
        Player's Score: ${playerScore += 1}
        Computer's Score: ${computerScore}`;
    } else if (playerChoice == 'Paper' && computerChoice == 'Paper') {
        return `It's a tie, paper can't beat paper silly
        Player's Score: ${playerScore}
        Computer's Score: ${computerScore}`;
    } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
        return `You lose! ,scissors beats paper
        Player's Score: ${playerScore}
        Computer's Score: ${computerScore += 1}`;
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        return `You win ,paper beats rock
        Player's Score: ${playerScore += 1}
        Computer's Score: ${computerScore}`;
    } else if (playerChoice == 'Scissors' && computerChoice == 'Scissors') {
        return `It's a tie, scissors can't beat scissors silly
        Player's Score: ${playerScore}
        Computer's Score: ${computerScore}`;
    } else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
        return `You lose! ,rock beats scissors
        Player's Score: ${playerScore}
        Computer's Score: ${computerScore += 1}`;
    } else {
        return `You win ,scissors beats paper
        Player's Score: ${playerScore += 1}
        Computer's Score: ${computerScore}`;
    }
}

// Algorithm for the game 
// display in the console log , the playRound function 5 times
// if the player score and computer score = 5 then display you win or you lose respectively 
// else you can do better than that 
function game() {
    console.log(playRound(playerChoice,computerChoice))
    console.log(playRound(playerChoice,computerChoice))    
    console.log(playRound(playerChoice,computerChoice))
    console.log(playRound(playerChoice,computerChoice))
    console.log(playRound(playerChoice,computerChoice))
  
    if (playerScore == 5) {
        console.log('You win!!!')
    } else if (computerScore == 5) {
        console.log('You lose!!')
    } else {
        console.log("You can do better than that")
    }
}

game()