//Business Logic for Game
export function Game (){
  this.players = [];
  this.currentPlayer = null;
}

Game.prototype.addPlayer = function(name){
  var newPlayer = new Player(name);
  this.currentPlayer = newPlayer;
  this.players.push(newPlayer);
};

Game.prototype.switchPlayer = function(){
  if (this.currentPlayer.playerName === this.players[0].playerName){
    this.currentPlayer = this.players[1];

  } else if(this.currentPlayer.playerName === this.players[1].playerName){
    this.currentPlayer = this.players[0];

  }
};

Game.prototype.checkCondition = function(lastDiceRoll){
  console.log(lastDiceRoll);
  if(lastDiceRoll === 1){
    this.switchPlayer();
  } else {
    this.currentPlayer.score.scoreValue += lastDiceRoll;
    console.log(this.currentPlayer.score.scoreValue);
    if (this.currentPlayer.score.scoreValue >= 100){
      return console.log("Game Over");
    }
  }
};

//Business Logic for Players
function Player (){
  this.playerName = name;
  this.score =  new Score(0);
}

// // //Business logic for score
function Score (scoreValue){
  this.scoreValue = scoreValue;
}
//
Score.prototype.diceRoll = function(min, max) {
  min = 1;
  max = 7;
  return Math.floor(Math.random() * (max-min) + min);
};
