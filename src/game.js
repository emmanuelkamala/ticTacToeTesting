import { Board } from '../src/board';
import { Player } from '../src/player';

export class Game {
  constructor(board) {
    this.board = board;
    this.player = new Player;
    this.grid = this.board.grid;
    this.player1 = this.player.player1;
    this.player2 = this.player.player2;
    this.currentPlayer = this.player1;
  }

  makeMove(currentPlayer, position) {
    if(this.board.isValidPosition(position)) {
      this.board.putMarkOnGrid(currentPlayer, position);
      return true;
    };
    return false;
  };

  canContinuePlaying(currentPlayer) {
    if(this.board.hasPlayerWon(currentPlayer) === false && this.board.gameIsATie() === false) {
      return true
    }
    return false
  };

  switchPlayer() {
    if(this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    };
  }

  isTieOrIsWon() {
    if(this.board.gameIsATie()) {
      return "It's a tie!";
    } else if(this.board.hasPlayerWon(this.currentPlayer)) {
      return `${this.currentPlayer} wins!`;
    }
    return ""
  }
}
