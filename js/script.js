function generateComputerChoice (){
  let computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice === 1) {
      computerChoice = "ROCK";
      $(".computerChoice").text("ROCK");
    }
    else if (computerChoice === 2) {
      computerChoice = "SCISSORS";
      $(".computerChoice").text("SCISSORS");
    }
    else {
      computerChoice = "PAPER";
      $(".computerChoice").text("PAPER");
    }
  return computerChoice;
}

function determineWinner (choice, computerChoice) {
  if (choice === computerChoice) {
      $(".result").text("Tie! " + "Play Again!");
      $(".computerScore").text("Computer: " + computerScore);
      $(".playerScore").text("Player: " + playerScore);
    }
    else if ( 
      ((choice === "ROCK") && (computerChoice === "SCISSORS")) ||
      ((choice === "SCISSORS") && (computerChoice === "PAPER")) ||
      ((choice === "PAPER") && (computerChoice === "ROCK")) ) 
    {
      $(".result").text("You win! " + "Play Again!");
      playerScore++;
      $(".computerScore").text("Computer: " + computerScore);
      $(".playerScore").text("Player: " + playerScore);
    }
    else {
      $(".result").text("You Lose! " + "Play Again!");
      computerScore++;
      $(".computerScore").text("Computer: " + computerScore);
      $(".playerScore").text("Player: " + playerScore);
    }
}

let playerScore = 0;
let computerScore = 0;
$(".scores").hide();

$(".play").click (function() {
  let choice = $(".input").val().toUpperCase();
  $(".userChoice").text(choice);
  if (choice === "SCISSORS" || choice === "ROCK" || choice === "PAPER") {
    let computerChoice = generateComputerChoice();
    determineWinner(choice, computerChoice);
    $(".scores").show();
  }
  else {
    $(".result").text("This is not a valid answer >:(");
  }
  
});
