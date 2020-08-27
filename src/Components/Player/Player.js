import gameboard from '../Gameboard/Gameboard';

const player = () => {
  const playerGameboard = gameboard();

  return {
    gameboard: playerGameboard,
    attack: (col, row, enemy) => {
      const updatedEnemyGameboard = enemy.gameboard.receiveAttack(col, row);

      if (updatedEnemyGameboard === null) {
        return null;
      }

      const updatedEnemy = {
        ...enemy,
        gameboard: updatedEnemyGameboard,
      };
      return updatedEnemy;
    },
  };
};

export default player;
