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

Score.prototype.gamePlay = function(rollResult) {
    console.log(rollResult);
    if(rollResult === 1) {
      // Game.switchPlayer();

    } else {
      this.scoreValue += rollResult;
      console.log(this.scoreValue);
    }

}


// Player.prototype.addScore = function(score) {
//     this.dice();
// }
// User Interface Logic
var game = new Game
// var player1 = new Player("Paige", 2)
// game.addPlayer(player1)
// player1.score.gamePlay(player1.score.diceRoll())
// player1.gamePlay(diceRoll());
