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
  this.score = score;
}

Player.prototype.diceRoll = function(min, max) {
    min = 1;
    max = 7;
    return Math.floor(Math.random() * (max-min));
    // console.log(this.diceRoll());
}

Player.prototype.gamePlay = function(rollResult) {
    this.score = this.diceRoll();
    console.log(this.score);
}

// Player.prototype.addScore = function(score) {
//     this.score +=
// }
// User Interface Logic
var game = new Game
var player1 = new Player("Paige", 2)
game.addPlayer(player1)
