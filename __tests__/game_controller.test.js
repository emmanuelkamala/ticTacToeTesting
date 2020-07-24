import { GameController } from '../src/game_controller';
import { Board } from '../src/board';
import { Game } from '../src/game';

describe('GameController', () => {
  it('creates an instance of the Game class when initialized', () => {
    const board = new Board([1, 2, 3]);
    const game = new Game(board);
    const gameController = new GameController(game);
    expect(typeof gameController.game === 'object').toEqual(true);
  });

  it('allows a player to make a move', () => {
    const board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const game = new Game(board);
    const gameController = new GameController(game);
    gameController.takeTurn(3);
    expect(gameController.game.grid).toEqual([1, 2, 'x', 4, 5, 6, 7, 8, 9]);
  });

  it('allows a second player to make a move', () => {
    const board = new Board([1, 2, 'x', 4, 5, 6, 7, 8, 9]);
    const game = new Game(board);
    const gameController = new GameController(game);
    gameController.game.currentPlayer = gameController.game.player2;
    gameController.takeTurn(5);
    expect(gameController.game.grid).toEqual([1, 2, 'x', 4, 'o', 6, 7, 8, 9]);
  });

  it('switches the player after a valid move is made', () => {
    const board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const game = new Game(board);
    const gameController = new GameController(game);
    gameController.takeTurn(5);
    expect(gameController.game.currentPlayer).toEqual(
      gameController.game.player2,
    );
  });

  it('does not switch the player if an invalid move is made', () => {
    const board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const game = new Game(board);
    const gameController = new GameController(game);
    gameController.takeTurn(5);
    gameController.takeTurn(2);
    gameController.takeTurn(2);
    expect(gameController.game.currentPlayer).toEqual(
      gameController.game.player1,
    );
  });

  it('returns "Tie" when neither player has won after 9 moves', () => {
    const board = new Board(['o', 'x', 'x', 'x', 'o', 'o', 'o', 'x', 'x']);
    const game = new Game(board);
    const gameController = new GameController(game);
    gameController.canContinuePlaying();
    expect(gameController.isATieOrWon()).toEqual("It's a tie!");
  });

  it('returns "Win" when a player has won', () => {
    const board = new Board(['x', 'x', 'x', 'o', 'x', 'o', 'o', 'o', 'x']);
    const game = new Game(board);
    const gameController = new GameController(game);
    gameController.canContinuePlaying();
    expect(gameController.isATieOrWon()).toEqual('x wins!');
  });

  it('checks if game can continue and returns false due to a tie', () => {
    const board = new Board(['o', 'x', 'x', 'x', 'o', 'o', 'o', 'x', 'x']);
    const game = new Game(board);
    const gameController = new GameController(game);
    expect(gameController.canContinuePlaying()).toEqual(false);
  });

  it('checks if game can continue and returns false because player has winning combination', () => {
    const board = new Board(['x', 'x', 'x', 'o', 'x', 'o', 'o', 'o', 'x']);
    const game = new Game(board);
    const gameController = new GameController(game);
    expect(gameController.canContinuePlaying()).toEqual(false);
  });

  it('checks if game can continue and returns true because a player has not won, and there are less than 9 moves', () => {
    const board = new Board(['o', 'x', 3, 'o', 'x', 6, 7, 8, 'x']);
    const game = new Game(board);
    const gameController = new GameController(game);
    expect(gameController.canContinuePlaying()).toEqual(true);
  });
});
