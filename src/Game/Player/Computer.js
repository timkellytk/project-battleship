import Player from './Player';
import { getRandomInt } from '../utils';

const getRandomCoordinate = (gameboard) => {
  const emptyCoordinates = gameboard.board.reduce(
    (accumulatorArray, col, colIndex) => {
      const colArray = col
        .map((_, rowIndex) => {
          return {
            col: colIndex,
            row: rowIndex,
          };
        })
        .filter((cell) => {
          return gameboard.board[cell.col][cell.row] === '';
        });
      return [...accumulatorArray, ...colArray];
    },
    []
  );
  const emptyIndex = getRandomInt(0, emptyCoordinates.length - 1);
  const { col, row } = emptyCoordinates[emptyIndex];
  return { col, row };
};

class Computer extends Player {
  attack(enemy) {
    const { col, row } = getRandomCoordinate(enemy.gameboard);
    return enemy.gameboard.receiveAttack(col, row);
  }
}

export default Computer;
