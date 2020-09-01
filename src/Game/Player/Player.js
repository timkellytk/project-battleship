import gameboard from '../Gameboard/Gameboard';

const attack = (col, row, enemy) => {
  const updatedEnemyGameboard = enemy.gameboard.receiveAttack(col, row);

  if (updatedEnemyGameboard === null) {
    return null;
  }

  const updatedEnemy = {
    ...enemy,
    gameboard: updatedEnemyGameboard,
  };
  return updatedEnemy;
};

const player = () => {
  const playerGameboard = gameboard();

  return {
    gameboard: playerGameboard,
    attack,
  };
};

export default player;
