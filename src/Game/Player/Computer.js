import Player from './Player';
import { getRandomInt, validCoordinate } from '../utils';

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
  const randomIndex = getRandomInt(0, emptyCoordinates.length - 1);
  const { row, col } = emptyCoordinates[randomIndex];
  return { row, col };
};

const emptyCoordinate = (row, col, gameboard) =>
  gameboard[row][col] !== 'MISS' && gameboard[row][col] !== 'HIT';

const getPossibleCoords = ({ row, col }) => {
  return [
    { row: row - 1, col },
    { row, col: col - 1 },
    { row, col },
    { row, col: col + 1 },
    { row: row + 1, col },
  ];
};

const getSurroundingEmptyCoordinate = (hitShipArray, gameboard) => {
  for (let i = 0; i < hitShipArray.length; i++) {
    const surroundingCoords = getPossibleCoords(hitShipArray[i]);
    const anyCellAvailable = surroundingCoords.some(
      ({ row, col }) =>
        validCoordinate(row, col) && emptyCoordinate(row, col, gameboard)
    );
    if (anyCellAvailable) {
      const emptySurroundingCoords = surroundingCoords.filter(
        ({ row, col }) =>
          validCoordinate(row, col) && emptyCoordinate(row, col, gameboard)
      );
      const randomIndex = getRandomInt(0, emptySurroundingCoords.length - 1);
      const { row, col } = emptySurroundingCoords[randomIndex];
      return {
        row,
        col,
      };
    }
  }
};

const getComputerCoordinate = (gameboard) => {
  if (hitShipArray.length > 0) {
    return getSurroundingEmptyCoordinate(hitShipArray, gameboard.board);
  }
  return getRandomCoordinate(gameboard);
};

let hitShipArray = [];

class Computer extends Player {
  attack(enemy) {
    const { row, col } = getComputerCoordinate(enemy.gameboard);
    const result = enemy.gameboard.receiveAttack(row, col);
    if (result === 'HIT') {
      hitShipArray.push({ row, col });
    }
    if (result === 'SUNK') {
      hitShipArray = [];
    }
    return result;
  }
}

export default Computer;
