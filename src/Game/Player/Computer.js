import Player from './Player';
import { getRandomInt, validCoordinate } from '../utils';

const getRandomCoord = (emptyCoordinates) => {
  const randomIndex = getRandomInt(0, emptyCoordinates.length - 1);
  const { row, col } = emptyCoordinates[randomIndex];
  return { row, col };
};

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
  return getRandomCoord(emptyCoordinates);
};

const emptyCoordinate = (row, col, gameboard) =>
  gameboard[row][col] !== 'MISS' && gameboard[row][col] !== 'HIT';

const getPossibleCoords = ({ row, col }) => {
  return [
    { row: row - 1, col },
    { row, col: col - 1 },
    { row, col: col + 1 },
    { row: row + 1, col },
  ];
};

const getSurroundingEmptyCoordinate = (hitShipArray, gameboard) => {
  const surroundingCoords = getPossibleCoords(hitShipArray[0]);
  const emptySurroundingCoords = surroundingCoords.filter(
    ({ row, col }) =>
      validCoordinate(row, col) && emptyCoordinate(row, col, gameboard)
  );
  return getRandomCoord(emptySurroundingCoords);
};

const getVerticalCoordinate = (hitShipArray, gameboard) => {
  const sortedArray = hitShipArray.sort((a, b) => a.row - b.row);
  const lowCoord = { ...sortedArray[0] };
  const highCoord = { ...sortedArray[sortedArray.length - 1] };
  lowCoord.row -= 1;
  highCoord.row += 1;

  const verticalCoordinates = [lowCoord, highCoord].filter(
    ({ row, col }) =>
      validCoordinate(row, col) && emptyCoordinate(row, col, gameboard)
  );
  return getRandomCoord(verticalCoordinates);
};

const getHorizontalCoordinate = (hitShipArray, gameboard) => {
  const sortedArray = hitShipArray.sort((a, b) => a.col - b.col);
  const lowCoord = { ...sortedArray[0] };
  const highCoord = { ...sortedArray[sortedArray.length - 1] };
  lowCoord.col -= 1;
  highCoord.col += 1;

  const horizontalCoordinates = [lowCoord, highCoord].filter(
    ({ row, col }) =>
      validCoordinate(row, col) && emptyCoordinate(row, col, gameboard)
  );
  return getRandomCoord(horizontalCoordinates);
};

const getComputerCoordinate = (gameboard) => {
  if (hitShipArray.length === 1) {
    return getSurroundingEmptyCoordinate(hitShipArray, gameboard.board);
  }
  if (hitShipArray.length >= 2) {
    return hitShipArray[0].col === hitShipArray[1].col
      ? getVerticalCoordinate(hitShipArray, gameboard.board)
      : getHorizontalCoordinate(hitShipArray, gameboard.board);
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
