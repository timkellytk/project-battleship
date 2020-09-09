import { BOARD_SIZE } from '../Constants/Constants';

class Gameboard {
  constructor() {
    this.board = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(''));
    this.ships = [];
  }
  placeShip(ship) {
    const coords = ship.getCoordinates();
    const validCoordinates = coords.reduce((valid, { col, row }) => {
      return col > 9 || col < 0 || row > 9 || row < 0 ? false : valid;
    }, true);

    const noShipExists = coords.reduce((noShip, coord) => {
      const noExistingShip = this.ships.reduce((noOtherShip, otherShip) => {
        const noExistingCoord = otherShip
          .getCoordinates()
          .reduce((noCoord, otherCoord) => {
            const emptyCoord =
              coord.col === otherCoord.col && coord.row === otherCoord.row;
            return emptyCoord ? false : noCoord;
          }, true);
        return noExistingCoord ? noOtherShip : false;
      }, true);
      return noExistingShip ? noShip : false;
    }, true);

    if (validCoordinates && noShipExists) {
      this.ships.push(ship);
      return true;
    }
    return false;
  }
}

export default Gameboard;
