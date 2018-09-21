//Global Vars
let buttonGroup = document.querySelectorAll('.btn-game')


//functions
function GetComputerSelection (){
  let randomNum = Math.trunc(Math.random()*3); 
  switch (randomNum){
    case 0: return ("rock");
    case 1: return ("paper");
    case 2: return ("scissors");
    default: "Error Math.random outside of 0-3 scope"; 
  }
}

function RunRound(userSelectionParam, computerSelectionParam){
  if(userSelectionParam == computerSelectionParam)
  {
    console.log('tie');
    return ('tie');
  }
  if (userSelectionParam == "rock" && computerSelectionParam == "scissors"){ //this is hidious, but I can't think of a better way rn
      
      var results = "user"
      return results;

  }
  if(userSelectionParam == "rock" && computerSelectionParam == "paper"){
      console.log("You lose!");
      var results = "computer"
      return results
  }
  if(userSelectionParam == "scissors" && computerSelectionParam == "paper"){
      console.log("You win!");
      var results = "user"
      return results;
  }
  if(userSelectionParam == "scissors" && computerSelectionParam == "rock"){
      console.log("You lose!");
      var results = "computer"
      return results;
  }
  if(userSelectionParam == "paper" && computerSelectionParam == "rock")
  {
      console.log("You win!");
      var results = "user"
      return results
  }
  if(userSelectionParam == "paper" && computerSelectionParam == "scissors"){
      console.log("You lose!");
      var results = "computer"
      return results;
  }

}

function ScoreMatch(roundWinnerParam){
  const tieElem = document.getElementById('tie-count');
  let tieText = tieElem.textContent;
  

  const userElem = document.getElementById('user-count');
  let userText = userElem.textContent;

  const computerElem = document.getElementById('computer-count')
  let computerText = computerElem.textContent;
  
  /*switch(roundWinnerParam) {
    case 'tie': tieText++;
                tieElem.textContent = tieText;

    case 'user':  userText++;
                  userElem.textContent = userText;
    case 'computer':  computerText++;
                      computerElem.textContent = computerText;
    
  }*/

  if(roundWinnerParam == 'user')
  {
    userText++;
    userElem.textContent = userText;
  }
  else if(roundWinnerParam == 'computer')
  {
    computerText++;
    computerElem.textContent = computerText;
  }
  else
  {
    tieText++;
    tieElem.textContent = tieText;
  }
}


//button event handling
Array.from(buttonGroup).map(i => AddEventHandler(i));

function AddEventHandler(buttonArrayParam){
  let userSelection;
  let computerSelection;
  let roundWinner;
  let scoreBoard;
  //vs section
  const userPick = document.getElementById('user-selection');
  const computerPick = document.getElementById('computer-selection');
  

  
  buttonArrayParam.addEventListener('click', function(e){
    userSelection = e.target.value;
    computerSelection = GetComputerSelection();
    userPick.textContent = userSelection;//shows what user picked 
    computerPick.textContent = computerSelection; // vs computer picked
    roundWinner = RunRound(userSelection, computerSelection);
    scoreBoard = ScoreMatch(roundWinner);
    
    
    
  });
  
}
//https://github.com/inuhoo/rock-paper-scissors/blob/master/scripts.js

