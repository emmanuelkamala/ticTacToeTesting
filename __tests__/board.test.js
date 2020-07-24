import { Board } from '../src/board';

describe('Board', () => {
  it('can take a grid as an argument when initialized', () => {
    const board = new Board([1, 2, 3]);
    expect(board.grid).toEqual([1, 2, 3]);
  });

  it('puts a mark on the grid', () => {
    const board = new Board([1, 'o', 3, 4, 5, 6, 'x', 8, 9]);
    board.putMarkOnGrid('x', 9);
    expect(board.grid).toEqual([1, 'o', 3, 4, 5, 6, 'x', 8, 'x']);
  });

  it('counts number of marks on grid', () => {
    const board = new Board([1, 2, 3, 'o', 5, 6, 7, 8, 'x']);
    board.gameIsATie();
    expect(board.moves).toEqual(2);
  });

  it('can track number of moves made on the grid', () => {
    const board = new Board([1, 2, 3, 'o', 5, 6, 7, 8, 'x']);
    board.gameIsATie();
    board.putMarkOnGrid('x', 1);
    board.gameIsATie();
    expect(board.moves).toEqual(3);
  });

  it('returns true if position is available', () => {
    const board = new Board([1, 'o', 3, 4, 5, 6, 'x', 8, 9]);
    expect(board.isValidPosition(8)).toEqual(true);
  });

  it('returns false if position is not available', () => {
    const board = new Board([1, 'o', 3, 4, 5, 6, 'x', 8, 9]);
    expect(board.isValidPosition(2)).toEqual(false);
  });

  it('can check whether 1, 2, and 3 have the mark x', () => {
    const board = new Board(['x', 'x', 'x', 4, 5, 'o', 'o', 8, 'o']);
    expect(board.hasPlayerWon('x')).toEqual(true);
  });

  it('can check whether 4, 5, and 6 have the mark o', () => {
    const board = new Board(['x', 'x', 3, 'o', 'o', 'o', 'x', 8, '9']);
    expect(board.hasPlayerWon('o')).toEqual(true);
  });

  it('can check whether player has won in a row', () => {
    const board = new Board(['o', 'o', 3, 'x', 'x', 'x', 'o', 8, '9']);
    expect(board.hasPlayerWon('x')).toEqual(true);
  });

  it('can check whether player has won in a column', () => {
    const board = new Board(['o', 'x', 3, 'o', 'x', 6, 'o', 'x', '9']);
    expect(board.hasPlayerWon('x')).toEqual(true);
  });

  it('can check whether player has won diagonally', () => {
    const board = new Board(['o', 'x', 3, 'x', 'o', 6, 'x', 8, 'o']);
    expect(board.hasPlayerWon('o')).toEqual(true);
  });

  it('can tell when the game is a tie', () => {
    const board = new Board(['x', 'x', 'o', 'o', 'x', 'x', 'x', 'o', 'o']);
    expect(board.gameIsATie()).toEqual(true);
  });
});
