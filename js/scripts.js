//Business Logic for Game
function Game (){
  this.players = [];
}

Game.prototype.addPlayer = function(player){
  this.players.push(player);
}
//Business Logic for Players
function Player (player, score){
  this.playerName = player;
  this.score =  new Score(0);
}

//Business logic for score
function Score (scoreValue){
  this.scoreValue = scoreValue;
}

Score.prototype.diceRoll = function(min, max) {
    min = 1;
    max = 7;
    return Math.floor(Math.random() * (max-min) + min);
}

Score.prototype.gamePlay = function(rollResult) {
    //this.score = this.diceRoll();
    // rollResult = this.diceRoll();
    console.log(rollResult);
    this.scoreValue += rollResult;
    console.log(this.scoreValue);
}
// Player.prototype.addScore = function(score) {
//     this.dice();
// }
// User Interface Logic
var game = new Game
var player1 = new Player("Paige", 2)
game.addPlayer(player1)
player1.score.gamePlay(player1.score.diceRoll())
// player1.gamePlay(diceRoll());
