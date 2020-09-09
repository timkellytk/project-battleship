import { BOARD_SIZE } from '../Constants/Constants';

class Gameboard {
  constructor() {
    this.board = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(''));
  }
}

export default Gameboard;
