   let numOfRounds = GetRounds(); 
            //gets the number of rounds desired to play
      
            
            //create function to generate computer input @ randomn
            function ComputerPlay (){ 
                let computerInput;
                let randomNum = Math.random(); //create random numbner between 0 - 1 not including one (just the Math.random rule)
                if(randomNum < .34){ //if it is less than .34 its rock .33 chance of rock
                    computerInput = "rock"
                    return computerInput;
                }
                else if(randomNum >= .34 && randomNum < .67){ //if it is greater than or equal to .34 and less than .67 it is Paper!
            
                    computerInput = "paper"
                    return computerInput;
                }
                else{ //if it is greater outside of the previous constraints is is scissors, I think the numbers are limited to .67 and greater!
                    computerInput = "scissors"
                    return computerInput;
                }
            };
            //gets user input returns as a string
         
          let userSelection;
          function RockBtn (){
            return
          
          
            //logic for the winner between the computers and users for one round based on input fed from the ComputerPlay and UserPlay functions
            function Round(userParam, computerParam){
                //take params and define them as userInput and computerInput
                var userInput = userParam;
                var computerInput = computerParam;
                const gamePhrase = "Rock!\nPaper!\nScissors!\nShoot!\nComputer:" + computerInput + " vs User:" + userInput;//used to signify a match
                //
                //Write Rock paper scissors phrase everytime the function is called
                console.log(gamePhrase);
                //game logic NEEDS WORK
                if (computerInput === userInput){ //tie game
                    console.log("It's a Draw!");   
                    var results = "draw"
                    return results;
                }
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
            //keeps track of the score based on the results fed from the Round function
    
            //Calls on all functions to play a game for a determined amount of rounds
            function Game(roundsParam){
                //rounds played counter
                let roundsPlayed = 0;
                let userScore = 0;
                let computerScore = 0;
                let drawCount = 0;
                //while loop, while the rounds played counter is less or equal to the rounds param passed from outside the function execute loop
                while(roundsPlayed < roundsParam)
                    {
                        let computerInput = ComputerPlay();
                        let userInput = UserPlay();
                        let roundResults = Round(userInput, computerInput);
                        if(roundResults === "user"){
                            userScore++;
                        }
                        else if(roundResults === "computer"){
                            computerScore++;
                        }
                        else if (roundResults === "draw"){
                            drawCount++;
                        }
                        
                        roundsPlayed++
                    }
                console.log("Computer Score:"+ computerScore +"\nUser Score:" + userScore+ "\nDraws:"+drawCount+"\nMatches Played:"+roundsPlayed);
                
                
                if (userScore > computerScore){
                    console.log("You won the whole game! 😄")
                }
                else if(userScore < computerScore){
                    console.log("The computer got the best of you this game 🙁")
                }
                else{
                    console.log("Match was a draw!")
                }
                
            }
            
            Game(numOfRounds);