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

const getSurroundingCoords = ({ row, col }) => {
  return [
    { row: row - 1, col: col - 1 },
    { row: row - 1, col },
    { row: row - 1, col: col + 1 },
    { row, col: col - 1 },
    { row, col },
    { row, col: col + 1 },
    { row: row + 1, col: col - 1 },
    { row: row + 1, col },
    { row: row + 1, col: col + 1 },
  ];
};

const validCoordinate = (row, col) =>
  row >= 0 && row <= 9 && col >= 0 && col <= 9;

const getEmptySurroundingCoordinate = (shipExistsAtCoords, gameboard) => {
  const surroundingCoords = getSurroundingCoords(shipExistsAtCoords);
  const emptySurroundingCoords = surroundingCoords.filter(({ row, col }) => {
    return (
      validCoordinate(row, col) &&
      gameboard[row][col] !== 'MISS' &&
      gameboard[row][col] !== 'HIT'
    );
  });
  const emptyIndex = getRandomInt(0, emptySurroundingCoords.length - 1);
  const { row, col } = emptySurroundingCoords[emptyIndex];
  return { row, col };
};

const getComputerCoordinate = (gameboard) => {
  if (shipExistsAtCoords) {
    return getEmptySurroundingCoordinate(shipExistsAtCoords, gameboard.board);
  }
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
    return result;
  }
}

export default Computer;
