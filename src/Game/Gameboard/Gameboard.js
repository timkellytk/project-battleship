import Ship from '../Ship/Ship';
import { BOARD_SIZE } from '../Constants/Constants';
import { getRandomInt, getRandomBool } from '../utils';

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

const allOtherShips = (ships, shipIndex) =>
  ships.filter((_, index) => index !== shipIndex);

const shipExists = (ships, attackCoords) =>
  ships.reduce((shipAtCoords, curShip) => {
    const shipExistsAtCoords = curShip
      .getCoordinates()
      .reduce((shipExistsBool, shipCoord) => {
        const shipExists =
          shipCoord.col === attackCoords.col &&
          shipCoord.row === attackCoords.row;
        return shipExists ? true : shipExistsBool;
      }, false);
    return shipExistsAtCoords ? curShip : shipAtCoords;
  }, null);

class Gameboard {
  constructor() {
    this.board = [...Array(BOARD_SIZE)].map((col) =>
      [...Array(BOARD_SIZE)].map((cell) => '')
    );
    this.ships = [];
  }
  getGameboard() {
    return this.board;
  }
  getShips() {
    return this.ships;
  }
  placeShip(ship) {
    const coords = ship.getCoordinates();

    if (validCoordinates(coords) && noShipExists(coords, this.ships)) {
      this.ships.push(ship);
      return true;
    }
    return false;
  }
  intialiseShips() {
    const shipsRequired = [
      { quantity: 4, size: 1 },
      { quantity: 3, size: 2 },
      { quantity: 2, size: 3 },
      { quantity: 1, size: 4 },
    ];

    shipsRequired.forEach(({ quantity, size }) => {
      let i = 0;
      while (i < quantity) {
        const newShip = new Ship(
          getRandomInt(0, 9),
          getRandomInt(0, 9),
          size,
          getRandomBool()
        );
        if (newShip) {
          this.ships.push(newShip);
          i += 1;
        }
      }
    });
  }
  randomiseShips() {
    this.ships = [];
    this.intialiseShips();
  }
  moveShip(col, row, shipIndex) {
    const ship = this.ships[shipIndex];
    const newStartCoord = { col, row };
    const newCoords = ship.getCoordinates(newStartCoord);
    const otherShips = allOtherShips(this.ships, shipIndex);

    if (validCoordinates(newCoords) && noShipExists(newCoords, otherShips)) {
      ship.startCoordinate = newStartCoord;
      return true;
    }
    return false;
  }
  toggleShip(shipIndex) {
    const ship = this.ships[shipIndex];
    const newCoords = ship.getCoordinates(
      ship.startCoordinate,
      !ship.orientation
    );
    const otherShips = allOtherShips(this.ships, shipIndex);

    if (validCoordinates(newCoords) && noShipExists(newCoords, otherShips)) {
      ship.toggleOrientation();
      return true;
    }
    return false;
  }
  receiveAttack(col, row) {
    const ship = shipExists(this.ships, { col, row });

    if (ship) {
      ship.hit();
      return true;
    }

    this.board[col][row] = 'HIT';
    return false;
  }
  gameover() {
    const result = this.ships.reduce((gameover, ship) => {
      return ship.isSunk() && gameover;
    }, true);

    return result;
  }
}

export default Gameboard;
