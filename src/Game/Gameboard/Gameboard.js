import { BOARD_SIZE } from '../Constants/Constants';

const validCoordinates = (coords) =>
  coords.reduce((valid, { col, row }) => {
    return col > 9 || col < 0 || row > 9 || row < 0 ? false : valid;
  }, true);

const noShipExists = (coords, ships) =>
  coords.reduce((noShip, coord) => {
    const noExistingShip = ships.reduce((noOtherShip, otherShip) => {
      const noExistingCoord = otherShip
        .getCoordinates()
        .reduce((emptyCoord, otherCoord) => {
          const coordClash =
            coord.col === otherCoord.col && coord.row === otherCoord.row;
          return coordClash ? false : emptyCoord;
        }, true);
      return noExistingCoord ? noOtherShip : false;
    }, true);
    return noExistingShip ? noShip : false;
  }, true);

class Gameboard {
  constructor() {
    this.board = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(''));
    this.ships = [];
  }
  placeShip(ship) {
    const coords = ship.getCoordinates();

    if (validCoordinates(coords) && noShipExists(coords, this.ships)) {
      this.ships.push(ship);
      return true;
    }
    return false;
  }
}

export default Gameboard;
