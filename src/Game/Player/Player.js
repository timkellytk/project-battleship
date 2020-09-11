import Gameboard from '../Gameboard/Gameboard';

class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }
  attack(col, row, enemy) {
    return enemy.gameboard.receiveAttack(col, row);
  }
}

export default Player;
