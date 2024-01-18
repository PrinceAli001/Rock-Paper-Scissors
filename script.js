//all the variables i'll be needing
let computerChoice;

let playerScore = 0

let computerScore = 0

let playerActualScore = document.querySelector('#player-actual-score') 

let computerActualScore = document.querySelector('#computer-actual-score') 

let rockOne = document.querySelector('#Rock1')

let paperOne = document.querySelector('#Paper1')

let scissorsOne = document.querySelector('#Scissors1')

let pictureHolderOne = document.querySelector('#picture-holder1')

let pictureHolderTwo = document.querySelector('#picture-holder2')

let playerGameProgress = document.querySelector('#player-game-progress')

let computerGameProgress = document.querySelector('#computer-game-progress')

let winOrLoss = document.querySelector('.win-or-loss')

let playerName = document.querySelector('#player-name')

let playerAbbrevation = document.querySelector('#player-abbre')

playerName.textContent = prompt('Enter a name to play')
alert(`Instructions for the game are as follows;
> This is a game of first to 5 points
> Reload the page to play again
> The game starts as soon as you click on the ok button 
> You can start by clicking on any of the buttons (Rock,Paper,Scissors)
(Note: this is a game of 5 but the game will continue regardless of your win or loss status)`)
playerAbbrevation.textContent = getInitialLetter(playerName.textContent)

// functions 

function getInitialLetter(playersName) {
    let initial = playersName.charAt(0)
    return initial;
};

function getComputerChoice() {
    if ((Math.floor(Math.random()*3) + 1 == 1)) {
        return 'Rock'
    } else if ((Math.floor(Math.random()*3) + 1 == 2)) {
        return 'Paper'
    } else {
       return 'Scissors'
    }
}

function playRound (playerSelection) {
    computerChoice = getComputerChoice();
   

    if (playerSelection == 'rock' && computerChoice == 'Rock') {
       playerGameProgress.textContent = 'rock'

       computerGameProgress.textContent = 'rock'
    } else if (playerSelection == 'rock' && computerChoice == 'Paper') {
        playerGameProgress.textContent = 'rock'
 
        computerGameProgress.textContent = 'paper'        
    } else if ( playerSelection == 'rock' && computerChoice == 'Scissors') {
        playerGameProgress.textContent = 'rock'
 
        computerGameProgress.textContent = 'scissors'
    } else if ( playerSelection == 'paper' && computerChoice == 'Paper') {
        playerGameProgress.textContent = 'paper'
 
        computerGameProgress.textContent = 'paper'
    } else if ( playerSelection == 'paper' && computerChoice == 'Scissors') {
        playerGameProgress.textContent = 'paper'
 
        computerGameProgress.textContent = 'scissors'
    } else if ( playerSelection == 'paper' && computerChoice == 'Rock') {
        playerGameProgress.textContent = 'paper'
 
        computerGameProgress.textContent = 'rock'
    } else if ( playerSelection == 'scissors' && computerChoice == 'Scissors') {
        playerGameProgress.textContent = 'scissors'
 
        computerGameProgress.textContent = 'scissors'
    } else if ( playerSelection == 'scissors' && computerChoice == 'Rock') {
        playerGameProgress.textContent = 'scissors'
 
        computerGameProgress.textContent = 'rock'
    } else {
        playerGameProgress.textContent = 'scissors'
 
        computerGameProgress.textContent = 'paper'
    }
}

function changePictureHolders(playerChoice) {

    if (playerChoice == 'rock' && computerChoice == 'Rock') {
        pictureHolderTwo.style.cssText = 'background-image: url(./Images/Right-hand-rock.jpg); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
        pictureHolderOne.style.cssText = 'background-image: url(./Images/Right-hand-rock.jpg); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
    } else if (playerChoice == 'rock' && computerChoice == 'Paper') {
        pictureHolderTwo.style.cssText = 'background-image: url(./Images/Right-hand-rock.jpg); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
        pictureHolderOne.style.cssText = 'background-image: url(./Images/Paper.jpg); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
    } else if ( playerChoice == 'rock' && computerChoice == 'Scissors') {
       pictureHolderTwo.style.cssText = 'background-image: url(./Images/Right-hand-rock.jpg); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
       pictureHolderOne.style.cssText = 'background-image: url(./Images/Right-hand-scissors.webp); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
    } else if ( playerChoice == 'paper' && computerChoice == 'Paper') {
        pictureHolderTwo.style.cssText = 'background-image: url(./Images/Paper.jpg); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
        pictureHolderOne.style.cssText = 'background-image: url(./Images/Paper.jpg); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
    } else if ( playerChoice == 'paper' && computerChoice == 'Scissors') {
        pictureHolderTwo.style.cssText = 'background-image: url(./Images/Paper.jpg); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
        pictureHolderOne.style.cssText = 'background-image: url(./Images/Right-hand-scissors.webp); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
    } else if ( playerChoice == 'paper' && computerChoice == 'Rock') {
        pictureHolderTwo.style.cssText = 'background-image: url(./Images/Paper.jpg); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
        pictureHolderOne.style.cssText = 'background-image: url(./Images/Right-hand-rock.jpg); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
    } else if ( playerChoice == 'scissors' && computerChoice == 'Scissors') {
        pictureHolderTwo.style.cssText = 'background-image: url(./Images/Right-hand-scissors.webp); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
        pictureHolderOne.style.cssText = 'background-image: url(./Images/Right-hand-scissors.webp); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
    } else if ( playerChoice == 'scissors' && computerChoice == 'Rock') {
        pictureHolderTwo.style.cssText = 'background-image: url(./Images/Right-hand-scissors.webp); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
        pictureHolderOne.style.cssText = 'background-image: url(./Images/Right-hand-rock.jpg); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
    } else {
        pictureHolderTwo.style.cssText = 'background-image: url(./Images/Right-hand-scissors.webp); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
        pictureHolderOne.style.cssText = 'background-image: url(./Images/Paper.jpg); background-repeat: no-repeat; background-position: center; background-size: contain; mix-blend-mode: multiply;';
    }
}

function updateScore(playerChoose) {
    
    if (playerChoose == 'rock' && computerChoice == 'Rock') {
       
     } else if (playerChoose == 'rock' && computerChoice == 'Paper') {
        computerActualScore.textContent = computerScore += 1
     } else if ( playerChoose == 'rock' && computerChoice == 'Scissors') {
        playerActualScore.textContent = playerScore += 1
     } else if ( playerChoose == 'paper' && computerChoice == 'Paper') {
      
     } else if ( playerChoose == 'paper' && computerChoice == 'Scissors') {
        computerActualScore.textContent = computerScore += 1
     } else if ( playerChoose == 'paper' && computerChoice == 'Rock') {
        playerActualScore.textContent = playerScore += 1
     } else if ( playerChoose == 'scissors' && computerChoice == 'Scissors') {
       
     } else if ( playerChoose == 'scissors' && computerChoice == 'Rock') {
        computerActualScore.textContent = computerScore += 1
     } else {
        playerActualScore.textContent = playerScore += 1
     }


    if (playerActualScore.textContent == 5 && computerActualScore.textContent < 5) {
        winOrLoss.textContent = `You win!!!`
        winOrLoss.setAttribute('style','text-align: center; font-weight: 500; font-size: 52px;')
    } else if (computerActualScore.textContent == 5 && playerActualScore.textContent < 5) {
        winOrLoss.textContent = `You lost!!!`
        winOrLoss.setAttribute('style','text-align: center; font-weight: 500; font-size: 52px;')
    }
}

//  buttons

rockOne.addEventListener('click', () => {
    playRound('rock')
    changePictureHolders('rock')
    updateScore('rock')
})

paperOne.addEventListener('click', () => {
    playRound('paper')
    changePictureHolders('paper')
    updateScore('paper')
})

scissorsOne.addEventListener('click', () => {
    playRound('scissors')
    changePictureHolders('scissors')
    updateScore('scissors')
})