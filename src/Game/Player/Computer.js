import Player from './Player';
import { getRandomInt } from '../utils';

const getRandomCoordinate = (gameboard) => {
  const emptyCoordinates = [];
  gameboard.board.forEach((col, colIndex) => {
    col.forEach((_, rowIndex) => {
      if (gameboard.board[colIndex][rowIndex] !== 'HIT') {
        emptyCoordinates.push({ col: colIndex, row: rowIndex });
      }
    });
  });
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
