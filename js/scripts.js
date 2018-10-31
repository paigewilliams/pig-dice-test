//Business Logic for Game
function Game (){
  this.players = [];
  this.currentPlayer = null;
}

Game.prototype.addPlayer = function(name){
  var newPlayer = new Player(name)
  this.currentPlayer = newPlayer
  this.players.push(newPlayer);
}

Game.prototype.switchPlayer = function(){
  if (this.currentPlayer.playerName === this.players[0].playerName){
    console.log("current = player 0");
    this.currentPlayer = this.players[1];
  } else if(this.currentPlayer.playerName === this.players[1].playerName){
    console.log("current = player 1");
    this.currentPlayer = this.players[0];
  }
}

Game.prototype.checkCondition = function(lastDiceRoll){
  console.log(lastDiceRoll);
  if(lastDiceRoll === 1){
   this.switchPlayer();
 } else {
   this.currentPlayer.score.scoreValue += lastDiceRoll;
   console.log(this.currentPlayer.score.scoreValue);
 }
}

//Business Logic for Players
function Player (name, score){
  this.playerName = name;
  this.score =  new Score(0);
}


// //Business logic for score
function Score (scoreValue){
  this.scoreValue = scoreValue;
}
//
Score.prototype.diceRoll = function(min, max) {
    min = 1;
    max = 7;
    return Math.floor(Math.random() * (max-min) + min);
}



// User Interface Logic
var game = new Game;
// var player1 = new Player("Paige", 2)
// game.addPlayer(player1)
// newPlayer.score.gamePlay(newPlayer.score.diceRoll())
// player1.gamePlay(diceRoll());
//game.currentPlayer.score.gamePlay(game.currentPlayer.score.diceRoll());
