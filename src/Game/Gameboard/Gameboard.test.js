import Gameboard from './Gameboard';
import Ship from '../Ship/Ship';

describe('Gameboard', () => {
  let gameboard;
  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])(
    'Create expected gameboard',
    (index) => {
      expect(gameboard.board.length).toEqual(10);
      expect(gameboard.board[index].length).toEqual(10);
      expect(gameboard.ships).toEqual([]);
    }
  );
  test.each([new Ship(0, 0, 2), new Ship(7, 5, 2), new Ship(6, 4, 3, false)])(
    'placeShip() for valid coords: adds to ship array and returns true',
    (placedShip) => {
      expect(gameboard.placeShip(placedShip)).toEqual(true);
      expect(gameboard.ships.length).toEqual(1);
    }
  );
  test.each([new Ship(-1, 0, 2), new Ship(5, 9, 2), new Ship(9, 5, 2, false)])(
    'placeShip() for invalid coords: does not add to ship array and returns false',
    (placedShip) => {
      expect(gameboard.placeShip(placedShip)).toEqual(false);
      expect(gameboard.ships.length).toEqual(0);
    }
  );
  test('placeShip() for ship exists at coords: does not add to ship array and returns false', () => {
    gameboard.placeShip(new Ship(0, 0, 2));
    expect(gameboard.placeShip(new Ship(0, 0, 2))).toEqual(false);
    expect(gameboard.ships.length).toEqual(1);
  });
  test('placeShip() for ship exists at surrounding coords: does not add to ship array and returns false', () => {
    gameboard.placeShip(new Ship(0, 1, 2));
    expect(gameboard.placeShip(new Ship(0, 0, 2))).toEqual(false);
    expect(gameboard.ships.length).toEqual(1);
  });
  test.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])(
    'intialiseShips() creates all ships for new game',
    (index) => {
      gameboard.intialiseShips();
      expect(gameboard.ships.length).toEqual(10);
      expect(gameboard.ships[index]).toBeTruthy();
    }
  );
  test.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])(
    'randomiseShips() randomises the ships',
    (index) => {
      gameboard.intialiseShips();
      const initalShips = gameboard.ships;
      gameboard.randomiseShips();
      const randomShips = gameboard.ships;

      expect(initalShips !== randomShips).toBeTruthy();
      expect(gameboard.ships.length).toEqual(10);
      expect(gameboard.ships[index]).toBeTruthy();
    }
  );
  test('moveShip() for valid coords: returns true and updates ship coords', () => {
    gameboard.placeShip(new Ship(7, 5, 2));
    expect(gameboard.moveShip(5, 6, 0)).toEqual(true);
    expect(gameboard.ships[0].startCoordinate).toEqual({ row: 5, col: 6 });
    expect(gameboard.ships[0].getCoordinates()).toEqual([
      { row: 5, col: 6 },
      { row: 5, col: 7 },
    ]);
  });
  test('moveShip() for valid coords with current ship at coords: returns true and updates ship coords', () => {
    gameboard.placeShip(new Ship(7, 5, 2));
    expect(gameboard.moveShip(7, 6, 0)).toEqual(true);
    expect(gameboard.ships[0].startCoordinate).toEqual({ row: 7, col: 6 });
    expect(gameboard.ships[0].getCoordinates()).toEqual([
      { row: 7, col: 6 },
      { row: 7, col: 7 },
    ]);
  });
  test('moveShip() for invalid coords: returns false and does not update ship coords', () => {
    gameboard.placeShip(new Ship(7, 5, 2));
    const expectedStartCoords = gameboard.ships[0].startCoordinate;

    expect(gameboard.moveShip(10, 2, 0)).toEqual(false);
    expect(gameboard.ships[0].startCoordinate).toEqual(expectedStartCoords);
  });
  test('moveShip() for ship exists at coords: returns false and does not update ship coords', () => {
    gameboard.placeShip(new Ship(7, 5, 2));
    const expectedStartCoords = { ...gameboard.ships[0].startCoordinate };
    gameboard.placeShip(new Ship(0, 0, 2));

    expect(gameboard.moveShip(0, 0, 0)).toEqual(false);
    expect(gameboard.ships[0].startCoordinate).toEqual(expectedStartCoords);
  });
  test('moveShip() for ship exists at surrounding coords: returns false and does not update ship coords', () => {
    gameboard.placeShip(new Ship(7, 5, 2));
    const expectedStartCoords = gameboard.ships[0].startCoordinate;
    const expectedCoords = gameboard.ships[0].getCoordinates();
    gameboard.placeShip(new Ship(1, 0, 2));

    expect(gameboard.moveShip(0, 0, 0)).toEqual(false);
    expect(gameboard.ships[0].startCoordinate).toEqual(expectedStartCoords);
    expect(gameboard.ships[0].getCoordinates()).toEqual(expectedCoords);
  });
  test('toggleShip() for valid coords: returns true and update orientation', () => {
    gameboard.placeShip(new Ship(7, 5, 2));
    const prevOrientation = gameboard.ships[0].orientation;

    expect(gameboard.toggleShip(0)).toEqual(true);
    expect(gameboard.ships[0].orientation).toEqual(!prevOrientation);
  });
  test('toggleShip() for invalid coords: returns false and does not update orientation', () => {
    gameboard.placeShip(new Ship(9, 5, 2));
    const prevOrientation = gameboard.ships[0].orientation;

    expect(gameboard.toggleShip(0)).toEqual(false);
    expect(gameboard.ships[0].orientation).toEqual(prevOrientation);
  });
  test('toggleShip() for other ship exists at coords: returns false and does not update orientation', () => {
    gameboard.placeShip(new Ship(6, 5, 3));
    const prevOrientation = gameboard.ships[0].orientation;
    gameboard.placeShip(new Ship(8, 5, 2));

    expect(gameboard.toggleShip(0)).toEqual(false);
    expect(gameboard.ships[0].orientation).toEqual(prevOrientation);
  });
  test('toggleShip() for other ship exists at surrounding coords: returns false and does not update orientation', () => {
    gameboard.placeShip(new Ship(6, 5, 2));
    const prevOrientation = gameboard.ships[0].orientation;
    gameboard.placeShip(new Ship(8, 5, 2));

    expect(gameboard.toggleShip(0)).toEqual(false);
    expect(gameboard.ships[0].orientation).toEqual(prevOrientation);
  });
  test('receiveAttack() for empty cell: record miss on board and return false', () => {
    expect(gameboard.receiveAttack(0, 0)).toEqual('MISS');
    expect(gameboard.board[0][0]).toEqual('MISS');
    expect(gameboard.board[0][1]).toEqual('');
    expect(gameboard.board[1][0]).toEqual('');
  });
  test('receiveAttack() for cell with a ship: send hit() to the correct ship and return true', () => {
    gameboard.placeShip(new Ship(5, 5, 2));
    gameboard.placeShip(new Ship(0, 0, 2));
    expect(gameboard.receiveAttack(0, 0)).toEqual('HIT');
    expect(gameboard.board[0][0]).toEqual('HIT');
    expect(gameboard.ships[1].hitCount).toEqual(1);
  });
  test('receiveAttack() for cell with a sunk ship: send hit() to the correct ship and update all cells to "SUNK" on gameboard', () => {
    gameboard.placeShip(new Ship(5, 5, 2));
    gameboard.placeShip(new Ship(0, 0, 2));
    expect(gameboard.receiveAttack(0, 0)).toEqual('HIT');
    expect(gameboard.receiveAttack(0, 1)).toEqual('SUNK');
    expect(gameboard.board[0][0]).toEqual('SUNK');
    expect(gameboard.board[0][1]).toEqual('SUNK');
    expect(gameboard.board[1][0]).toEqual('MISS');
    expect(gameboard.board[1][1]).toEqual('MISS');
    expect(gameboard.board[1][2]).toEqual('MISS');
    expect(gameboard.board[0][2]).toEqual('MISS');
  });
  test('gameover() for all ships sunk', () => {
    gameboard.placeShip(new Ship(0, 0, 2));
    gameboard.ships[0].hit();
    gameboard.ships[0].hit();
    expect(gameboard.gameover()).toEqual(true);
  });
  test('gameover() for not all ships sunk', () => {
    gameboard.placeShip(new Ship(0, 0, 2));
    expect(gameboard.gameover()).toEqual(false);
  });
  test('getGameboard() returns gameboard', () => {
    expect(gameboard.getGameboard()).toEqual(gameboard.board);
    gameboard.receiveAttack(0, 0);
    expect(gameboard.getGameboard()).toEqual(gameboard.board);
  });
  test('getShips() returns ships', () => {
    expect(gameboard.getShips()).toEqual(gameboard.ships);
    gameboard.placeShip(new Ship(0, 0, 2));
    expect(gameboard.getShips()).toEqual(gameboard.ships);
  });
});
