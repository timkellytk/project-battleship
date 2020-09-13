import Player from './Player';
import { getRandomInt } from '../utils';

const getRandomCoordinate = (gameboard) => {
  const emptyCoordinates = gameboard.board.reduce(
    (accumulatorArray, col, colIndex) => {
      const colArray = col.map((_, rowIndex) => {
        if (gameboard.board[colIndex][rowIndex] !== 'HIT') {
          return {
            col: colIndex,
            row: rowIndex,
          };
        }
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
    const { col, row } = getRandomCoordinate(this.gameboard);
    return enemy.gameboard.receiveAttack(col, row);
  }
}

export default Computer;
