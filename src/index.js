import { Board } from './board';
import { Player } from './player';
import { Game } from './game';
import { GameController } from './game_controller';

let board;
let game;
let gameController;

const startButton = document.getElementById('start-button');
const whosPlaying = document.getElementById('whos-playing');
const isTieOrWin = document.getElementById('tie-or-win');
const playerGrid = document.getElementById('player-grid');
const divIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];


function highlight(cellId) {
  if (gameController.game.currentPlayer === 'x') {
    document.getElementById(cellId).classList.add('player-one-move');
  } else if (gameController.game.currentPlayer === 'o') {
    document.getElementById(cellId).classList.add('player-two-move');
  }
}

function singleTurn(event) {
  const cellIdString = event.target.id;
  const cellIdNumber = parseInt(cellIdString)
  let selectedCell = document.getElementById(cellIdString);

  if(parseInt(event.target.id) === cellIdNumber) {
    if(gameController.game.board.gameIsATie() === false && gameController.game.board.hasPlayerWon() === false) {
      highlight(cellIdString);
      gameController.takeTurn(cellIdNumber);
      selectedCell.innerHTML = board.grid[cellIdNumber - 1];
    }
    currentPlayer();
    tieOrWin();
  } else {
    return;
  }
}



const currentPlayer = () => {
  whosPlaying.innerHTML = `Make a move: ${gameController.game.currentPlayer}`;
};

const tieOrWin = () => {
  isTieOrWin.innerHTML = gameController.isATieOrWon()
};

const showBoard = () => {
  board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  game = new Game(board);
  gameController = new GameController(game);
  divIds.forEach(function(div) {
    document.getElementById(div).innerHTML = '';
  });
};

const clear = () => {
  divIds.forEach(function(div) {
    document.getElementById(div).classList.remove('player-one-move');
    document.getElementById(div).classList.remove('player-two-move');
  });
}

const startGame = () => {
  showBoard();
  clear();
  currentPlayer();
  tieOrWin();

};

playerGrid.addEventListener('click', singleTurn)
startButton.addEventListener('click', startGame)
