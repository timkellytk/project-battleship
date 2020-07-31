import {
  createBoard,
  gameboard,
  placeShip,
  receiveAttack,
  checkGameover,
} from './Gameboard';

import { shipFactory } from '../Ship/Ship';

describe('createBoard()', () => {
  test('returns the expected object', () => {
    const col = () => {
      return {
        1: { ship: null, hit: null },
        2: { ship: null, hit: null },
        3: { ship: null, hit: null },
        4: { ship: null, hit: null },
        5: { ship: null, hit: null },
        6: { ship: null, hit: null },
        7: { ship: null, hit: null },
        8: { ship: null, hit: null },
        9: { ship: null, hit: null },
        10: { ship: null, hit: null },
      };
    };
    const board = {
      A: col(),
      B: col(),
      C: col(),
      D: col(),
      E: col(),
      F: col(),
      G: col(),
      H: col(),
      I: col(),
      J: col(),
    };
    expect(createBoard()).toEqual(board);
  });
});

describe('placeShip()', () => {
  const testBoard = gameboard();

  test('returns an updated board with a ship on the selected cell', () => {
    const testShip = shipFactory(1);
    const updatedCol = {
      ...testBoard.board,
      A: {
        1: { ship: testShip, hit: null },
        2: { ship: null, hit: null },
        3: { ship: null, hit: null },
        4: { ship: null, hit: null },
        5: { ship: null, hit: null },
        6: { ship: null, hit: null },
        7: { ship: null, hit: null },
        8: { ship: null, hit: null },
        9: { ship: null, hit: null },
        10: { ship: null, hit: null },
      },
    };
    const updatedBoard = {
      ...testBoard,
      board: updatedCol,
    };

    expect(placeShip('A', 1, testShip, testBoard)).toEqual(updatedBoard);
  });

  test('returns an updated board with a ship bigger than 1 cell', () => {
    const testShip = shipFactory(2);
    const updatedCol = {
      ...testBoard.board,
      B: {
        ...testBoard.board.B,
        2: { ship: testShip, hit: null },
        3: { ship: testShip, hit: null },
      },
    };
    const updatedBoard = {
      ...testBoard,
      board: updatedCol,
    };
    expect(placeShip('B', 2, testShip, testBoard, true)).toEqual(updatedBoard);
  });

  test('returns an updated board with a horizontal ship bigger than 1 cell', () => {
    const testShip = shipFactory(2);
    const updatedCol = {
      ...testBoard.board,
      C: {
        ...testBoard.board.B,
        6: { ship: testShip, hit: null },
      },
      D: {
        ...testBoard.board.B,
        6: { ship: testShip, hit: null },
      },
    };
    const updatedBoard = {
      ...testBoard,
      board: updatedCol,
    };
    expect(placeShip('C', 6, testShip, testBoard)).toEqual(updatedBoard);
  });
});

describe('receiveAttack()', () => {
  const testBoard = gameboard();
  test('returns an updated board with hit true for coordinates', () => {
    const updatedCol = {
      ...testBoard.board,
      A: {
        ...testBoard.board.A,
        1: { ship: null, hit: true },
      },
    };
    const updatedBoard = {
      ...testBoard,
      board: updatedCol,
    };
    expect(receiveAttack('A', 1, testBoard)).toEqual(updatedBoard);
  });
});

describe('checkGameover()', () => {
  test('returns true if all ships are sunk', () => {
    const testBoard = gameboard();
    const testShips = testBoard.ships;
    Object.keys(testShips).forEach((key) => {
      const ship = testShips[key];
      for (let i = 0; i < ship.length; i += 1) {
        ship.hitArray = ship.hit(ship.hitArray);
      }
      ship.sunk = ship.isSunk(ship.hitArray, ship.length);
    });
    expect(checkGameover(testShips)).toEqual(true);
  });
  test('returns false if all ships are not sunk', () => {
    const testBoard = gameboard();
    const testShips = testBoard.ships;
    expect(checkGameover(testShips)).toEqual(false);
  });
  test('returns false if only 2 ships are sunk', () => {
    const testBoard = gameboard();
    const testShips = testBoard.ships;
    const sunkShips = Object.keys(testShips).slice(0, 2);
    sunkShips.forEach((key) => {
      const ship = testShips[key];
      for (let i = 0; i < ship.length; i += 1) {
        ship.hitArray = ship.hit(ship.hitArray);
      }
      ship.sunk = ship.isSunk(ship.hitArray, ship.length);
    });
    expect(checkGameover(testShips)).toEqual(false);
  });
});

describe('gameboard()', () => {
  test('returns the expected object', () => {
    const board = createBoard();
    const ships = {
      carrier: shipFactory(5),
      battleship: shipFactory(4),
      cruiser: shipFactory(3),
      submarine: shipFactory(3),
      destroyer: shipFactory(2),
    };
    expect(gameboard()).toEqual({ board, ships, placeShip, receiveAttack });
  });
});
