export class Board {
  constructor(grid) {
    this.grid = grid;
    this.moves = 0;
    this.winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];
    this.checkCombos = false;
  }

  isValidPosition(position) {
    return typeof this.grid[position - 1] === 'number';
  }

  putMarkOnGrid(mark, position) {
    this.grid[position - 1] = mark;
  }

  hasPlayerWon(mark) {
    this.winningCombos.forEach((combo) => {
      combo.forEach(() => {
        const position1 = combo[0];
        const position2 = combo[1];
        const position3 = combo[2];
        if (this.grid[position1] === mark && this.grid[position2] === mark && this.grid[position3] === mark) {
          this.checkCombos = true;
        }
      });
    });
    return this.checkCombos;
  }

  gameIsATie() {
    this.moves = 0;
    this.grid.forEach((mark) => {
      if (typeof mark === 'string') {
        this.moves += 1;
      }
    });
    return (this.moves === 9 && this.checkCombos === false);
  }
}
