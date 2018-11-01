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
      this.currentPlayer = this.players[1];

  } else if(this.currentPlayer.playerName === this.players[1].playerName){
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
   if (this.currentPlayer.score.scoreValue >= 100){
     return console.log("Game Over");
   }
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

$(document).ready(function(){

  $("form#submitName").submit(function(event){
    event.preventDefault();
    var playerInput1 = $("input#player1").val();
    var playerInput2 = $("input#player2").val();
    game.addPlayer(playerInput1);
    game.addPlayer(playerInput2);

    $(".current-player").html(game.currentPlayer.playerName);
    $(".other-player-name").html(game.players[0].playerName)
    $(".output").show();
    $("#submitName").hide();


  });
  
  $("#roll").click(function(){
    var diceRollVal = game.currentPlayer.score.diceRoll()
    game.checkCondition(diceRollVal);
    $(".current-player").html(game.currentPlayer.playerName);
    $(".roll").html(diceRollVal);
    $(".total").html(game.currentPlayer.score.scoreValue);

    if (game.currentPlayer.playerName === game.players[0].playerName){
      $(".other-player-name").html(game.players[1].playerName);
      $(".other-player-total").html(game.players[1].score.scoreValue)
        if( diceRollVal === 1){
          $(".current-player-name").html(game.players[1].playerName)
          $(".other-player-switch").show();
          $(".current-player-rolled").hide();
        }

    } else if(game.currentPlayer.playerName === game.players[1].playerName){
      $(".other-player-name").html(game.players[0].playerName);
      $(".other-player-total").html(game.players[0].score.scoreValue)
      if( diceRollVal === 1){
        $(".current-player-name").html(game.players[0].playerName)
        $(".other-player-switch").show();
        $(".current-player-rolled").hide();
      }
    }
  });


  $("#hold").click(function(){
    game.switchPlayer();
    $(".current-player").html(game.currentPlayer.playerName);
    if (game.currentPlayer.playerName === game.players[0].playerName){
      $(".other-player-name").html(game.players[1].playerName);
      $(".other-player-total").html(game.players[1].score.scoreValue)
      $(".total").html(game.currentPlayer.score.scoreValue)

    } else if(game.currentPlayer.playerName === game.players[1].playerName){
      $(".other-player-name").html(game.players[0].playerName);
      $(".other-player-total").html(game.players[0].score.scoreValue)
      $(".total").html(game.currentPlayer.score.scoreValue)

    }
  });


})
