
console.log("Test")

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
        
    
    
     
    //choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    //console.log(choice)

    //while (choice != "rock" || "paper" || "scissors")
    //choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    



    }
    
    


    

function round(playerSelection, computerSelection) {

    console.log("Player selection = ", playerSelection, " Computer selection = ", computerSelection);
    let winner = "";

    if (playerSelection == "paper") {
        if (computerSelection == "paper") 
        {
            winner = "tie";
            console.log("It's a tie");
            return winner;
        }
        else if 
        (computerSelection == "rock") {
            winner = "player";
            console.log("You Win! Paper beats Rock");
            return winner;
        }
        else
        {
            winner = "computer";
            console.log("You Lose! Scissors beats Paper 1");
            return winner;
        }
    }
    else if (playerSelection == "rock") {
        
            if (computerSelection == "paper") 
            {
                winner = "computer";
                console.log("You Lose! Paper beats Rock");
                return winner;
            }
            else if 
            (computerSelection == "rock") {
                winner = "tie";
                console.log("It's a tie");
                return winner;
            }
            else
            {
                winner = "player";
                console.log("You Win! Rock beats Scissors2");
                return winner;
            }        
        }

    else {
        if (computerSelection == "paper") 
        {
            winner = "player";
            console.log("You Win! Scissors beats Paper");
            return winner;
        }
        else if (computerSelection == "rock") {
            winner = "computer";
            console.log("You Lose! Rock beats Scissors3");
            return winner;
        }
        else
        {
            winner = "tie";
            console.log("It's a tie ");
            return winner;
        }        }
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

    for (let rounds = 1; rounds <6; rounds++) {
        
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

    }

    console.log(`Player wins ${playerwins}, Computer wins ${computerwins} and ${ties} tie(s)`);
    
    
}





game();
