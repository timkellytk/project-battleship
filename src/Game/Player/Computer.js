import gameboard from '../Gameboard/Gameboard';
import { rows, columns } from '../Constants/Constants';
import { getRandomInt } from '../utils';

const attack = (enemy) => {
  const emptyCoordinates = [];

  columns.forEach((col) => {
    rows.forEach((row) => {
      const emptyCell = !enemy.gameboard.board[col][row].hit;
      if (emptyCell) {
        emptyCoordinates.push({ col, row });
      }
    });
  });

  const randomCoordinateNumber = getRandomInt(0, emptyCoordinates.length - 1);
  const { col, row } = emptyCoordinates[randomCoordinateNumber];

  const updatedGameboard = enemy.gameboard.receiveAttack(col, row);
  const updatedEnemy = { ...enemy, gameboard: updatedGameboard };
  return updatedEnemy;
};

const computer = () => {
  const computerGameboard = gameboard();
  return {
    gameboard: computerGameboard,
    attack,
  };
};

export default computer;
