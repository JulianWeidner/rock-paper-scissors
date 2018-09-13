
//Global Vars
//Get button Elements 
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
// get h5 element 4 user results
const userSelectionEle = document.getElementById('user-selection');
let userSelectionText = userSelectionEle.textContent;
// get h5 element for computer results
const computerSelectionEle = document.getElementById('computer-selection');
let computerSelectionText = computerSelectionEle.textContent;
//get p element for computer score
const computerScoreEle = document.getElementById('computer-count');
let computerScoreText = computerScoreEle.textContent;
//get p element for user score
const userScoreEle = document.getElementById('user-count');
let userScoreText = userScoreEle.textContent;
//get p element for tie
const tieScoreEle = document.getElementById('tie-count');
let tieScoreText = tieScoreEle.textContent;






//Event listeners
rockBtn.addEventListener('click', () => {
    userSelectionText = 'rock';
    userSelectionEle.textContent = userSelectionText;
    
    
    
});

rockBtn.addEventListener('click', () => {

    computerSelectionText = ComputerPlay();
    computerSelectionEle.textContent = computerSelectionText;
});

paperBtn.addEventListener('click', () => {
    userSelectionText = 'paper';
    userSelectionEle.textContent = userSelectionText;
});

paperBtn.addEventListener('click', () => {

    computerSelectionText = ComputerPlay();
    computerSelectionEle.textContent = computerSelectionText;
});

scissorsBtn.addEventListener('click', () => {
	userSelectionText = 'scissors';
    userSelectionEle.textContent = userSelectionText;
});

scissorsBtn.addEventListener('click', () => {

    computerSelectionText = ComputerPlay();
    computerSelectionEle.textContent = computerSelectionText;
});


//functions
function ComputerPlay (){ 
    let computerInput;
    let randomNum = Math.random(); //create random numbner between 0 - 1 not including one (just the Math.random rule)
    if(randomNum < .34){ //if it is less than .34 its rock .33 chance of rock
        computerInput = "rock";
        console.log(computerInput);
        return computerInput;
    }
    else if(randomNum >= .34 && randomNum < .67){ //if it is greater than or equal to .34 and less than .67 it is Paper!

        computerInput = "paper";
        console.log(computerInput);
        return computerInput;
    }
    else{ //if it is greater outside of the previous constraints is is scissors, I think the numbers are limited to .67 and greater!
        computerInput = "scissors";
        console.log(computerInput);
        return computerInput;
    }

};
if (computerInput === userInput){ //tie game
    console.log("It's a Draw!");   
    var results = "draw"
    return results;
}



function Round(){
    //take params and define them as userInput and computerInput
    var userInput = userParam;
    var computerInput = computerParam;
    const gamePhrase = "Rock!\nPaper!\nScissors!\nShoot!\nComputer:" + computerInput + " vs User:" + userInput;//used to signify a match
    //
    //Write Rock paper scissors phrase everytime the function is called
    console.log(gamePhrase);
    //game logic NEEDS WORK


    if (userInput == "rock" && computerInput == "scissors"){ //this is hidious, but I can't think of a better way rn
        console.log("You win!");
        var results = "user"
        return results;

    }
    if(userInput == "rock" && computerInput == "paper"){
        console.log("You lose!");
        var results = "computer"
        return results
    }
    if(userInput == "scissors" && computerInput == "paper"){
        console.log("You win!");
        var results = "user"
        return results;
    }
    if(userInput == "scissors" && computerInput == "rock"){
        console.log("You lose!");
        var results = "computer"
        return results;
    }
    if(userInput == "paper" && computerInput == "rock")
    {
        console.log("You win!");
        var results = "user"
        return results
    }
    if(userInput == "paper" && computerInput == "scissors"){
        console.log("You lose!");
        var results = "computer"
        return results;
    }
};
