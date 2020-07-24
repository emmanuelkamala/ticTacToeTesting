import { Game } from '../src/game';
import { Board } from '../src/board';

describe('Game', () => {
  it('creates an instance of the Board class when initialized', () => {
    const board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const game = new Game(board);
    expect(game.grid).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('creates an instance of the player 1 when initialized', () => {
    const board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const game = new Game(board);
    expect(game.player1).toEqual('x');
  });

  it('creates an instance of the player 2 when initialized', () => {
    const board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const game = new Game(board);
    expect(game.player2).toEqual('o');
  });

  it('sets the current player to player 1 when initialized', () => {
    const board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const game = new Game(board);
    expect(game.currentPlayer).toEqual('x');
  });

  it('switches from one player to another', () => {
    const board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const game = new Game(board);
    game.switchPlayer();
    expect(game.currentPlayer).toEqual('o');
  });

  it('allows a player to make a move', () => {
    const board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const game = new Game(board);
    game.makeMove(game.currentPlayer, 3);
    expect(game.grid).toEqual([1, 2, 'x', 4, 5, 6, 7, 8, 9]);
  });

  it('does not allow a player to make a move if the position is taken', () => {
    const board = new Board([1, 2, 'x', 4, 'o', 6, 7, 8, 9]);
    const game = new Game(board);
    game.makeMove(game.currentPlayer, 5);
    game.makeMove(game.currentPlayer, 1);
    expect(game.grid).toEqual(['x', 2, 'x', 4, 'o', 6, 7, 8, 9]);
  });

  it('knows the game has ended', () => {
    const board = new Board(['x', 'x', 'o', 'o', 'x', 'x', 'x', 'o', 'o']);
    const game = new Game(board);
    expect(game.canContinuePlaying(game.currentPlayer)).toEqual(false);
  });

  it('knows the game can still be played', () => {
    const board = new Board([1, 2, 'x', 4, 'o', 6, 7, 'x', 9]);
    const game = new Game(board);
    expect(game.canContinuePlaying(game.currentPlayer)).toEqual(true);
  });

  it('knows the game has ended and is a tie', () => {
    const board = new Board(['x', 'x', 'o', 'o', 'x', 'x', 'x', 'o', 'o']);
    const game = new Game(board);
    game.canContinuePlaying();
    expect(game.isTieOrIsWon()).toEqual("It's a tie!");
  });

  it('knows the game has ended and that a player has won', () => {
    const board = new Board(['o', 'x', 3, 'o', 'x', 6, 'o', 'x', '9']);
    const game = new Game(board);
    game.canContinuePlaying();
    expect(game.isTieOrIsWon()).toEqual('x wins!');
  });
});
