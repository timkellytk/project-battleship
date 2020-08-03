export const attack = (col, row, gameboard) => {
  const enemyGameboard = gameboard.receiveAttack(col, row, gameboard);
  return enemyGameboard;
};

export const player = () => {};
