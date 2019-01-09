import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Game } from './../src/scripts.js';
// import { Player } from './../src/scripts.js';
// import { Score } from './../src/scripts.js';
import './styles.css';

var game = new Game;

$(document).ready(function(){

  $("form#submitName").submit(function(event){
    event.preventDefault();
    var playerInput1 = $("input#player1").val();
    var playerInput2 = $("input#player2").val();
    game.addPlayer(playerInput1);
    game.addPlayer(playerInput2);

    $(".current-player").html(game.currentPlayer.playerName);
    $(".other-player-name").html(game.players[0].playerName);
    $(".output").show();
    $("#submitName").hide();


  });

  $("#roll").click(function(){
    var diceRollVal = game.currentPlayer.score.diceRoll();
    game.checkCondition(diceRollVal);
    $(".current-player").html(game.currentPlayer.playerName);
    $(".roll").html(diceRollVal);
    $(".total").html(game.currentPlayer.score.scoreValue);

    if (game.currentPlayer.playerName === game.players[0].playerName){
      $(".other-player-name").html(game.players[1].playerName);
      $(".other-player-total").html(game.players[1].score.scoreValue);
      if( diceRollVal === 1){
        $(".current-player-name").html(game.players[1].playerName);
        $(".other-player-switch").show();
        $(".current-player-rolled").hide();
      }

    } else if(game.currentPlayer.playerName === game.players[1].playerName){
      $(".other-player-name").html(game.players[0].playerName);
      $(".other-player-total").html(game.players[0].score.scoreValue);
      if( diceRollVal === 1){
        $(".current-player-name").html(game.players[0].playerName);
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
      $(".other-player-total").html(game.players[1].score.scoreValue);
      $(".total").html(game.currentPlayer.score.scoreValue);

    } else if(game.currentPlayer.playerName === game.players[1].playerName){
      $(".other-player-name").html(game.players[0].playerName);
      $(".other-player-total").html(game.players[0].score.scoreValue);
      $(".total").html(game.currentPlayer.score.scoreValue);

    }
  });


});
