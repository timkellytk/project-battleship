/* 
Test requirements for the Gameboard:
- board = array(array(10 * null) * 10) (DONE)
- ships = [] - set an empty array and allow yourself to intialiseShips with a function
- placeShip(col, row, ship) = place ship at col, row coordinates
- initaliseShips = add all starting ships to the ship array
- moveShip(col, row, ship)
- toggleShip(ship) = toggle the ship's orientation
- randomiseShips() = randomly place all the ships
- receiveAttack(col, row) =>
  if(!attackShips(col, row)) {
    update board at board[col][row] = 'miss'  
  }
  return
- gameover() = check if all ships are sunk
*/
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
    'placeShip() adds to ship array and returns true if ship has valid coords',
    (placedShip) => {
      expect(gameboard.placeShip(placedShip)).toEqual(true);
      expect(gameboard.ships.length).toEqual(1);
    }
  );
  test.each([new Ship(-1, 0, 2), new Ship(5, 9, 2), new Ship(9, 5, 2, false)])(
    'placeShip() does not add to ship array and returns false if ship has invalid coords',
    (placedShip) => {
      expect(gameboard.placeShip(placedShip)).toEqual(false);
      expect(gameboard.ships.length).toEqual(0);
    }
  );
  test('placeShip() does not add to ship array and returns false if ship already exists at coords', () => {
    gameboard.placeShip(new Ship(0, 0, 2));
    expect(gameboard.placeShip(new Ship(0, 0, 2))).toEqual(false);
    expect(gameboard.ships.length).toEqual(1);
  });
});
