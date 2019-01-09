import { Game } from './../src/scripts.js';

describe('Game', function(){

  var reusableGame;

  beforeEach(function() {
    reusableGame = new Game;
    reusableGame.addPlayer("Paige");
  })

  it('should add a player to a game', function(){
    expect(reusableGame.currentPlayer.playerName).toEqual("Paige");
  });

  it('should set the most recently added player as the current player', function(){
    expect(reusableGame.currentPlayer.playerName).toEqual("Paige");
    reusableGame.addPlayer("Rohan");
    expect(reusableGame.currentPlayer.playerName).toEqual("Rohan");
  });

  // it('should check if a row has a duplicate number', function(){
  //   expect(game2.checkRows()).toEqual(true);
  //   expect(game1.checkRows()).toEqual(false);
  // });
  //
  // it('should check if a column has a duplicate number', function(){
  //   expect(game2.checkColumns()).toEqual(true);
  //   expect(game1.checkColumns()).toEqual(false);
  // });
  //
  // it('should check if a grid has a duplicate number', function(){
  //   expect(game2.checkGrid()).toEqual(true);
  //   expect(game1.checkGrid()).toEqual(false);
  // });
  //
  // it('should check if a board is valid', function(){
  //   expect(game2.checkBoard()).toEqual(true);
  //   expect(game1.checkBoard()).toEqual(false);
  // });

});
