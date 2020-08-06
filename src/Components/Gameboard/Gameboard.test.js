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
    const cell = { ship: testShip, hit: null };
    const updatedRow = {
      ...testBoard.board.A,
      1: cell,
    };
    const updatedBoard = { ...testBoard.board, A: updatedRow };
    const updatedGameboard = {
      ...testBoard,
      board: updatedBoard,
    };

    expect(placeShip('A', 1, testShip, testBoard)).toEqual(updatedGameboard);
  });

  test('returns an updated board with a ship bigger than 1 cell', () => {
    const testShip = shipFactory(2);
    const cell = { ship: testShip, hit: null };
    const updatedRow = {
      ...testBoard.board.B,
      2: cell,
      3: cell,
    };
    const updatedBoard = {
      ...testBoard.board,
      B: updatedRow,
    };
    const updatedGameboard = {
      ...testBoard,
      board: updatedBoard,
    };
    expect(placeShip('B', 2, testShip, testBoard, true)).toEqual(
      updatedGameboard
    );
  });

  test('returns an updated board with a horizontal ship bigger than 1 cell', () => {
    const testShip = shipFactory(2);
    const cell = { ship: testShip, hit: null };
    const updatedRowC = {
      ...testBoard.board.C,
      6: cell,
    };
    const updatedRowD = {
      ...testBoard.board.D,
      6: cell,
    };
    const updatedCol = {
      ...testBoard.board,
      C: updatedRowC,
      D: updatedRowD,
    };
    const updatedGameboard = {
      ...testBoard,
      board: updatedCol,
    };
    expect(placeShip('C', 6, testShip, testBoard)).toEqual(updatedGameboard);
  });
  test('returns null when placeShip() on column that does not exist', () => {
    const testShip = shipFactory(2);
    expect(placeShip('Z', 1, testShip, testBoard)).toEqual(null);
  });
  test('returns null when placeShip() on row that does not exist', () => {
    const testShip = shipFactory(2);
    expect(placeShip('A', 11, testShip, testBoard)).toEqual(null);
  });
  test('returns null when placeShip() overlaps onto a row with a cell that does not exist', () => {
    const testShip = shipFactory(2);
    expect(placeShip('A', 10, testShip, testBoard, true)).toEqual(null);
  });
  test('returns null when placeShip() overlaps onto a column with a cell that does not exist', () => {
    const testShip = shipFactory(2);
    expect(placeShip('J', 1, testShip, testBoard)).toEqual(null);
  });
  test('returns null when placeShip() on cell with a ship', () => {
    const testShip = shipFactory(2);
    const placedShip = shipFactory(1);
    const cell = { ship: placedShip, hit: null };
    const updatedRow = {
      ...testBoard.board.A,
      1: cell,
    };
    const updatedCol = {
      ...testBoard.board,
      A: updatedRow,
    };
    const updatedBoard = {
      ...testBoard,
      board: updatedCol,
    };
    expect(placeShip('A', 1, testShip, updatedBoard)).toEqual(null);
  });
  test('returns null when placeShip() overlaps onto a row with a cell that contains a ship', () => {
    const testShip = shipFactory(2);
    const placedShip = shipFactory(2);
    const cell = { ship: placedShip, hit: null };
    const updatedRow = {
      ...testBoard.board.A,
      2: cell,
    };
    const updatedCol = {
      ...testBoard.board,
      A: updatedRow,
    };
    const updatedBoard = {
      ...testBoard,
      board: updatedCol,
    };
    expect(placeShip('A', 1, testShip, updatedBoard, true)).toEqual(null);
  });
  test('returns null when placeShip() overlaps onto a column with a cell that contains a ship', () => {
    const testShip = shipFactory(2);
    const placedShip = shipFactory(2);
    const cell = { ship: placedShip, hit: null };
    const updatedRow = {
      ...testBoard.board.B,
      1: cell,
    };
    const updatedCol = {
      ...testBoard.board,
      B: updatedRow,
    };
    const updatedBoard = {
      ...testBoard,
      board: updatedCol,
    };
    expect(placeShip('A', 1, testShip, updatedBoard)).toEqual(null);
  });
});

describe('receiveAttack()', () => {
  test('returns an updated board with hit true for coordinates', () => {
    const testBoard = gameboard();
    const cell = { ship: null, hit: true };
    const updatedRow = {
      ...testBoard.board.A,
      1: cell,
    };
    const updatedCol = {
      ...testBoard.board,
      A: updatedRow,
    };
    const updatedBoard = {
      ...testBoard,
      board: updatedCol,
    };
    expect(receiveAttack('A', 1, testBoard)).toEqual(updatedBoard);
  });
  test('returns an updated board with HIT added to the hitArray of the relevant ship', () => {
    const expectedBoard = gameboard();
    expectedBoard.board.A[1].ship = expectedBoard.ships.carrier;
    expect(
      receiveAttack('A', 1, expectedBoard).ships.carrier.hitArray
    ).toEqual(['HIT']);
  });
  test('returns null when hit is already true for coordinates', () => {
    const expectedBoard = gameboard();
    expectedBoard.board.A[1].hit = true;
    expect(receiveAttack('A', 1, expectedBoard)).toEqual(null);
  });
});

describe('checkGameover()', () => {
  test('returns true if all ships are sunk', () => {
    const testBoard = gameboard();
    const testShips = testBoard.ships;
    Object.keys(testShips).forEach((key) => {
      const ship = testShips[key];
      for (let i = 0; i < ship.length; i += 1) {
        ship.hitArray = ship.hit();
      }
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
        ship.hit();
      }
    });
    expect(checkGameover(testShips)).toEqual(false);
  });
});

describe('gameboard()', () => {
  test('returns the expected board property', () => {
    const testBoard = createBoard();
    expect(gameboard().board).toEqual(testBoard);
  });
  test('returns the expected ship object with correct properties', () => {
    expect(gameboard().ships).toHaveProperty('carrier');
    expect(gameboard().ships).toHaveProperty('battleship');
    expect(gameboard().ships).toHaveProperty('cruiser');
    expect(gameboard().ships).toHaveProperty('submarine');
    expect(gameboard().ships).toHaveProperty('destroyer');
  });
  test('returns the expected placeShip() method', () => {
    expect(gameboard().placeShip).toEqual(placeShip);
  });
  test('returns the expected receiveAttack() method', () => {
    expect(gameboard().receiveAttack).toEqual(receiveAttack);
  });
});
