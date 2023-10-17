
// Wait for page to load
document.addEventListener("DOMContentLoaded", function() {

// Display opening scene/hide others
document.querySelector('.selectionDiv').style.display = 'none';   
document.querySelector('.resetDiv').style.display = 'none';

// Start game
let startButton = document.querySelector('.startButton');
startButton.addEventListener('click', () => {

// Switch to selection scene
document.querySelector('.openingDiv').style.display = 'none';
document.querySelector('.selectionDiv').style.display = 'block';

let scoreboard = {tie: 0, humanWins: 0, computerWins: 0};

let playerChoice = '';

// Activate selection buttons
let btn = document.querySelectorAll('.selectButton'); 

    btn.forEach(function(e){
    e.addEventListener('click', () =>
        {
        // Extracting player choice from selected button
        playerChoice = e.innerHTML.toLowerCase();

        let computerChoice = getComputerChoice();

        // Initiate round
        let gameResult = playRound(playerChoice, computerChoice);

        scoreBoard = tallyScore(gameResult, scoreboard);

        let parsedResult = parseResultMessage(gameResult);

        // Selecting result div           
        resultsDiv = document.querySelector('.results');               
        // Clear result div           
        resultsDiv.innerHTML = "";
        result = document.createElement('p');

        resultsDiv.appendChild(
            createResultMessage(playerChoice, 
                                computerChoice, 
                                scoreboard, 
                                parsedResult));
        
        if ((scoreboard['tie'] == 5) || (scoreboard['humanWins'] == 5) || (scoreboard['computerWins'] ==5)) {
        overallWinner(scoreboard);
        document.querySelector('.selectionDiv').style.display = 'none';
        document.querySelector('.resetDiv').style.display = 'block';

        let resetBtn = document.querySelector('.resetBtn');
        resetBtn.addEventListener('click', () => {
            location.reload();
        });
        }   
        })
        })
    })
});


function overallWinner(scoreboard){
    if (scoreboard['tie'] === 5) {
       
        result.innerHTML = `${resultsMessage} <br><br> <strong>All tied!</strong>`;
        return result;      

        } else if (scoreboard['humanWins']  === 5) {
            result.innerHTML = `${resultsMessage} <br><br> <strong>Human is the Overall Winner!</strong>`; 
            return result;
        } else {           
            result.innerHTML = `${resultsMessage} <br><br> <strong>Computer is the Overall Winner!</strong>`;             }
            return result;
        }
 
function tallyScore(gameResult, scoreboard) {
    if (gameResult === "T")
    {
        scoreboard['tie'] += 1;
    }
    else if (gameResult === "H")
    {
        scoreboard['humanWins'] += 1;
    }
    else 
    {
        scoreboard['computerWins'] += 1;
    }
    return scoreboard;
    }

function parseResultMessage(gameResult) {
   
    if (gameResult === "T") 
        {
            return "Tie" 
        } 
        else if (gameResult === "H") 
        {
            return "Human Wins"
        }
        else {
            return "Computer Wins"
            }
    }

function createResultMessage(playerChoice, computerChoice, scoreboard, parsedResult) {
    resultsMessage = `Human selected: ${playerChoice} <br>
    Computer selected: ${computerChoice}<br><br> 
    <strong>${parsedResult}</strong><br><br>
    Tally: Ties:  ${scoreboard['tie']}, Human wins: ${scoreboard['humanWins']} and Computer wins: ${scoreboard['computerWins']}`
    
    result.innerHTML =  resultsMessage;
    return result;
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

