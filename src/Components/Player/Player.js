import { gameboard } from '../Gameboard/Gameboard';

export const attack = (col, row, attackGameboard) => {
  const enemyGameboard = attackGameboard.receiveAttack(
    col,
    row,
    attackGameboard
  );
  return enemyGameboard;
};

export const player = () => {
  const playerGameboard = () => gameboard();

  return {
    attack,
    gameboard: playerGameboard,
  };
};
