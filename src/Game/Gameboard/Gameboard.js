import Ship from '../Ship/Ship';
import { BOARD_SIZE } from '../Constants/Constants';
import { getRandomInt, getRandomBool, validCoordinate } from '../utils';

const validCoordinates = (coords) =>
  coords.every(({ row, col }) => {
    return row >= 0 && row <= 9 && col >= 0 && col <= 9;
  });

const noShipExists = (coords, ships) =>
  coords.every((coord) => {
    const existingShipsGameboard = ships.some((otherShip) => {
      return otherShip.getCoordinates().some((otherCoord) => {
        return surroundingShipExists(coord, otherCoord);
      });
    });
    return !existingShipsGameboard;
  });

const getSurroundingCoords = ({ row, col }) => {
  return [
    { row: row - 1, col: col - 1 },
    { row: row - 1, col },
    { row: row - 1, col: col + 1 },
    { row, col: col - 1 },
    { row, col },
    { row, col: col + 1 },
    { row: row + 1, col: col - 1 },
    { row: row + 1, col },
    { row: row + 1, col: col + 1 },
  ];
};

const surroundingShipExists = (coord, otherCoord) => {
  return getSurroundingCoords(coord).some(
    ({ row, col }) => row === otherCoord.row && col === otherCoord.col
  );
};

const allOtherShips = (ships, shipIndex) =>
  ships.filter((_, index) => index !== shipIndex);

const findShip = (ships, attackCoords) =>
  ships.find((curShip) => {
    const shipExistsAtCoords = curShip
      .getCoordinates()
      .some(
        (shipCoord) =>
          shipCoord.row === attackCoords.row &&
          shipCoord.col === attackCoords.col
      );
    return shipExistsAtCoords;
  });

const updateBoardSunkShip = (row, col, board) => {
  board[row][col] = 'SUNK';
  const surroundingCoords = getSurroundingCoords({ row, col });
  surroundingCoords.forEach(({ row, col }) => {
    if (
      validCoordinate(row, col) &&
      board[row][col] !== 'SUNK' &&
      board[row][col] !== 'HIT'
    ) {
      board[row][col] = 'MISS';
    }
  });
};

class Gameboard {
  constructor() {
    this.board = [...Array(BOARD_SIZE)].map((row) =>
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
        const shipPlaced = this.placeShip(newShip);
        if (shipPlaced) {
          i += 1;
        }
      }
    });
  }
  randomiseShips() {
    this.ships = [];
    this.intialiseShips();
  }
  moveShip(row, col, shipIndex) {
    if (this.canMoveShip(row, col, shipIndex)) {
      const ship = this.ships[shipIndex];
      ship.startCoordinate = { row, col };
      return true;
    }
    return false;
  }
  canMoveShip(row, col, shipIndex) {
    const ship = this.ships[shipIndex];
    const newStartCoord = { row, col };
    const newCoords = ship.getCoordinates(newStartCoord);
    const otherShips = allOtherShips(this.ships, shipIndex);

    if (validCoordinates(newCoords) && noShipExists(newCoords, otherShips)) {
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
  receiveAttack(row, col) {
    const ship = findShip(this.ships, { row, col });

    if (ship) {
      ship.hit();

      if (ship.isSunk()) {
        ship.getCoordinates().forEach(({ row, col }) => {
          updateBoardSunkShip(row, col, this.board);
        });
        return 'SUNK';
      }

      this.board[row][col] = 'HIT';
      return 'HIT';
    }

    this.board[row][col] = 'MISS';
    return 'MISS';
  }
  gameover() {
    const result = this.ships.every((ship) => ship.isSunk());
    return result;
  }
}

export default Gameboard;
