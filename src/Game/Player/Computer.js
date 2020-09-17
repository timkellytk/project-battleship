import Player from './Player';
import { getRandomInt } from '../utils';

const getRandomCoordinate = (gameboard) => {
  const emptyCoordinates = gameboard.board.reduce(
    (accumulatorArray, row, rowIndex) => {
      const rowArray = row
        .map((_, colIndex) => {
          return {
            row: rowIndex,
            col: colIndex,
          };
        })
        .filter((cell) => {
          return gameboard.board[cell.row][cell.col] === '';
        });
      return [...accumulatorArray, ...rowArray];
    },
    []
  );
  const emptyIndex = getRandomInt(0, emptyCoordinates.length - 1);
  const { row, col } = emptyCoordinates[emptyIndex];
  return { row, col };
};

const getComputerCoordinate = (gameboard) => {
  /* 
  Required logic:
  - If 'HIT' then return getEmptySurroundingCoordinate(shipExistsAtCoords, gameboard)
  - If 'SUNK' or 'MISS then return getRandomCoordinate(gameboard);
  */
  return getRandomCoordinate(gameboard);
};

let shipExistsAtCoords;

class Computer extends Player {
  attack(enemy) {
    const { row, col } = getComputerCoordinate(enemy.gameboard);
    const result = enemy.gameboard.receiveAttack(row, col);
    if (result === 'HIT') {
      shipExistsAtCoords = { row, col };
    }
    if (result === 'SUNK') {
      shipExistsAtCoords = null;
    }
    console.log(shipExistsAtCoords);
    return result;
  }
}

export default Computer;
