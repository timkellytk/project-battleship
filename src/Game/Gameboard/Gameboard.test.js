import gameboard from './Gameboard';
import shipFactory from '../Ship/Ship';

describe('gameboard() properties', () => {
  test('board is the expected object', () => {
    const cell = { ship: null, hit: null };

    const col = {
      1: cell,
      2: cell,
      3: cell,
      4: cell,
      5: cell,
      6: cell,
      7: cell,
      8: cell,
      9: cell,
      10: cell,
    };

    const board = {
      A: col,
      B: col,
      C: col,
      D: col,
      E: col,
      F: col,
      G: col,
      H: col,
      I: col,
      J: col,
    };

    expect(gameboard().board).toEqual(board);
  });
  test('returns the expected ship object with correct properties', () => {
    expect(gameboard().ships).toHaveProperty('carrier');
    expect(gameboard().ships).toHaveProperty('battleship');
    expect(gameboard().ships).toHaveProperty('cruiser');
    expect(gameboard().ships).toHaveProperty('submarine');
    expect(gameboard().ships).toHaveProperty('destroyer');
  });
});

describe('gameboard().placeShip() method', () => {
  const testBoard = gameboard();
  test('placeShip() returns an updated board with a ship on the selected cell', () => {
    // Copy testBoard and add ship to 'A1'
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

    expect(testBoard.placeShip('A', 1, testShip)).toEqual(updatedGameboard);
  });

  test('placeShip() returns an updated board with a ship bigger than 1 cell', () => {
    // Copy testBoard and add ship to 'B2' and 'B3'
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
    expect(testBoard.placeShip('B', 2, testShip, true)).toEqual(
      updatedGameboard
    );
  });

  test('placeShip() returns an updated board for horizontal ships', () => {
    // Copy testBoard and add ship to 'C6' and 'D6'
    const testShip = shipFactory(2);
    const cell = {
      ship: testShip,
      hit: null,
    };
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

    expect(testBoard.placeShip('C', 6, testShip, false)).toEqual(
      updatedGameboard
    );
  });
  test('placeShip() returns null if cell is not available', () => {
    // Column does not exist
    const testShipColumn = shipFactory(2);
    expect(gameboard().placeShip('Z', 1, testShipColumn)).toEqual(null);
    // Row does not exist
    const testShipRow = shipFactory(2);
    expect(gameboard().placeShip('A', 11, testShipRow)).toEqual(null);
    // Ship already exists
    const testShip = shipFactory(2);
    const placedShip = shipFactory(1);
    const updatedBoard = gameboard();

    updatedBoard.board.A[1] = { ship: placedShip, hit: null };
    expect(updatedBoard.placeShip('A', 1, testShip)).toEqual(null);
  });
  test('placeShip() returns null if the ship overlaps onto an unavailable cell', () => {
    // Column does not exist
    const testShipColumn = shipFactory(2);
    expect(gameboard().placeShip('J', 1, testShipColumn)).toEqual(null);
    // Row does not exist
    const testShipRow = shipFactory(2);
    expect(gameboard().placeShip('A', 10, testShipRow, true)).toEqual(null);
    // Ship already exists on overlapping row
    const testShip = shipFactory(2);
    const placedShip = shipFactory(2);
    const updatedBoard = gameboard();

    updatedBoard.board.A[2] = {
      ship: placedShip,
      hit: null,
    };

    expect(updatedBoard.placeShip('A', 1, testShip, true)).toEqual(null);

    // Ship already exists on overlapping column
    const testShip2 = shipFactory(2);
    const placedShip2 = shipFactory(2);
    const updatedBoard2 = gameboard();

    updatedBoard2.board.B[1] = {
      ship: placedShip2,
      hit: null,
    };

    expect(updatedBoard2.placeShip('A', 1, testShip2)).toEqual(null);
  });
});

describe('gameboard().receiveAtack() method', () => {
  test('returns an updated board with hit true for coordinates', () => {
    const updatedBoard = gameboard().receiveAttack('A', 1);
    expect(updatedBoard.board.A[1].hit).toEqual(true);
  });
  test('returns an updated board with HIT added to the hitArray of the relevant ship', () => {
    const testBoard = gameboard();
    testBoard.board.A[1].ship = testBoard.ships.carrier;

    const updatedBoard = testBoard.receiveAttack('A', 1);
    expect(updatedBoard.ships.carrier.hitArray).toEqual(['HIT']);
  });
  test('returns null when hit is already true for coordinates', () => {
    const testBoard = gameboard();
    testBoard.board.A[1].hit = true;
    expect(testBoard.receiveAttack('A', 1)).toEqual(null);
  });
});

describe('gameboard().checkGameover() method', () => {
  test('returns false if all ships are not sunk', () => {
    expect(gameboard().checkGameover()).toEqual(false);
  });
  test('returns true if all ships are sunk', () => {
    const testBoard = gameboard();
    const testShips = testBoard.ships;
    Object.keys(testShips).forEach((key) => {
      const ship = testShips[key];
      for (let i = 0; i < ship.length; i += 1) {
        ship.hitArray = ship.hit();
      }
    });
    expect(testBoard.checkGameover()).toEqual(true);
  });
  test('returns false if only 2 ships are sunk', () => {
    const testBoard = gameboard();
    const testShips = testBoard.ships;
    const sunkShips = Object.keys(testBoard.ships).slice(0, 2);
    sunkShips.forEach((key) => {
      const ship = testShips[key];
      for (let i = 0; i < ship.length; i += 1) {
        ship.hit();
      }
    });
    expect(testBoard.checkGameover()).toEqual(false);
  });
});
