//This function selects a random option for the computer.
//It yields one of three results: 'rock,' 'paper,' or'scissors'.
function getComputerChoice() {
    // A variety of options are available.
    const choices = ['rock', 'paper', 'scissors'];
    
    // Make a number between 0 and 2 at random.
    const randomNumber = Math.floor(Math.random() * 3);
    
    // Return the option that corresponds to the produced random number.
    return choices[randomNumber];
}

// This function chooses the winner based on the user's and the computer's preferences.
// It returns a string message with the outcome.
function winnerpicker(userChoice, computerChoice) {
    // Check to see if both options are the same, resulting in a tie.
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }

    // Examine numerous combinations in which the user wins.
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'User wins!';
    } else {
        // If none of the requirements listed above are satisfied, the computer wins.
        return 'Computer wins!';
    }
}

// This is the primary function in charge of gaming.
// It asks the user for their preference, then creates the computer's preference. 
// decides the winner, and provides the chance to play again.
function playGame() {
    // Prompt the user to provide their preference.
    let userChoice = prompt('Enter your answer: Rock, Paper, or Scissors').toLowerCase();

    // A validation loop is used to confirm that the user's input is one of the valid options.
    while (!['rock', 'paper', 'scissors'].includes(userChoice)) {
        alert('Invalid choice. Please enter Rock, Paper, or Scissors.');
        userChoice = prompt('Enter your answer: Rock, Paper, or Scissors').toLowerCase();
    }

    
    const computerChoice = getComputerChoice();

    
    console.log('User chose:', userChoice);
    console.log('Computer chose:', computerChoice);

    
    const result = winnerpicker(userChoice, computerChoice);
    console.log(result);

   
    const playAgain = confirm('Do you want to play again?');
    if (playAgain) {
        playGame();
    }
}

//When the script is loaded or run, start the game.
playGame();
