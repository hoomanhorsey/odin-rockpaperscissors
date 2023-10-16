
// Wait for page to load
document.addEventListener("DOMContentLoaded", function() {

let ties = 0;
let humanWins = 0;
let computerWins = 0;

// Selecting buttons and triggering game once button is clicked
let btn = document.querySelectorAll('button');

btn.forEach(function(e){

    e.addEventListener('click', () =>
        {
        // Extracting player choice from selected button
        let playerChoice = e.innerHTML.toLowerCase();
        
        // Selecting result div           
        resultsDiv = document.querySelector('.results');               
        // Clear result div           
        resultsDiv.innerHTML = "";
        
        result = document.createElement('div');

        let computerChoice = getComputerChoice();

        // Initiate round
        let gameResult = playRound(playerChoice, computerChoice);

        // Calculate Tally
                     
    

        if (gameResult === "T")
        {
            console.log(gameResult);

            ties += 1;
            console.log("ties", ties);

        }
        else if (gameResult === "H")
        {
            console.log(gameResult);

            humanWins += 1;
            console.log("human", humanWins);
        }
        else 
        {
            console.log(gameResult);

            computerWins += 1;
            console.log("computer", computerWins);

        }
     
        console.log("ties: " + ties + ", human " + humanWins + ", computer: " + computerWins)

        
        if (gameResult === "T") 
            {
                gameResult = "Tie" 
            } 
            else if (gameResult === "H") 
            {
                gameResult = "Human Wins"
            }
            else {gameResult = "Computer Wins"}

            console.log(gameResult);



        // Insert Tallying Switch case

        resultsMessage = `Human selected: ${playerChoice} <br>
        Computer selected: ${computerChoice}<br><br> 
        <strong>${gameResult}</strong><br><br>
        Tally: Ties:  ${ties}, Human wins: ${humanWins} and Computer wins: ${computerWins}`


        if ((ties != 5) && (humanWins != 5) && (computerWins !=5)) {
            result.innerHTML =  resultsMessage;
            resultsDiv.appendChild(result);

        } else {
            if (ties ===5) {
            result.innerHTML = `${resultsMessage} <br><br> <strong>All tied!</strong>`;
            resultsDiv.appendChild(result);

            
 
            } else if (humanWins === 5) {
                result.innerHTML = `${resultsMessage} <br><br> <strong>Human is the Overall Winner!</strong>`; 
                resultsDiv.appendChild(result);


            } else {
                result.innerHTML = `${resultsMessage} <br><br> <strong>Computer is the Overall Winner!</strong>`;             }
                resultsDiv.appendChild(result);


        }
       
        
                  })
    });

        
// Create score tally

// Get user selection
// Generate computer selection
// Simulate fight!

// Add result to tally
// Display result

function getTally(gameResult)
{
    

    if (gameResult == "It's a tie!")
        {
        ties += 1;
        }
    else if (gameResult == "Human is the Winner!")
        {
            humanWins += 1;
        }
    else 
        {
            computerWins += 1;
        }
     
}


function getRndInteger() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
   
    let number = getRndInteger();

    if (number === 0) {
       return "rock"
    } else if (number === 1) {
        return "paper"
    } else {
        return "scissors"}

    
};

function getPlayerChoice (rounds) {
    
    let choice = "";

    do {
        choice = prompt(`Round ${rounds}. Please choose 'Rock', 'Paper' or 'Scissors'`).toLowerCase();
        }
    while 
        (choice != "rock" && choice !="paper" && choice != "scissors");
    
    console.log("Player chooses - ", choice);
    return choice;
        
    
    
    }
     
   

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "paper") {
        if (computerSelection == "paper") 
        {
            return "T";
        }
        else if 
        (computerSelection == "rock") {
            return "H";
        }
        else
        {
            return "C";
        }
    }
    else if (playerSelection == "rock") {
        
            if (computerSelection == "paper") 
            {
                return "C";
            }
            else if 
            (computerSelection == "rock") 
            {
                return "T";
            }
            else
            {
                return "H";    
            }        
        }

    else {
        if (computerSelection == "paper") 
        {
            return "H";
        }
        else if (computerSelection == "rock") {
            return "C";
        }
        else
        {
            return "T";
    
        }        
    }
    }

    // "You Lose! Paper beats Rock"
    // "You Lose! Rock beats Scissors"
    // "You Lose! Scissors beats Paper"
    
    // "You Win! Paper beats Rock"
    // "You Win! Rock beats Scissors"
    // "You Win! Scissors beats Paper"
   
function game() {

    let ties = 0;
    let playerwins = 0;
    let computerwins = 0;

    //for (let rounds = 1; rounds <6; rounds++) {
        
        let computerChoice = getComputerChoice();

        let choice = getPlayerChoice(rounds);
        
        
        winner = round(choice, computerChoice);

        if (winner === "tie") {
            ties++
        } else if (winner == "player") {       
        playerwins++ } else {
            computerwins++
        };

        console.log("Round number - ", rounds, winner);

    //}

    console.log(`Player wins ${playerwins}, Computer wins ${computerwins} and ${ties} tie(s)`);
    
    
}











//game();

});
