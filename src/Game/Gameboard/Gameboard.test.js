/* 
Test requirements for the Gameboard:
- board = array(array(10 * null) * 10) (DONE)
- ships = [create an array of all the ships]
- placeShip(col, row, ship) = place ship at col, row coordinates
- toggleShip(ship) = toggle the ship
- randomiseShips() = randomly place all the ships
- receiveAttack(col, row) =>
  if(!attackShips(col, row)) {
    update board at board[col][row] = 'miss'  
  }
  return
- gameover() = check if all ships are sunk
*/
import Gameboard from './Gameboard';

describe('Gameboard', () => {
  let gameboard;
  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])(
    'Create expected board',
    (index) => {
      expect(gameboard.board.length).toEqual(10);
      expect(gameboard.board[index].length).toEqual(10);
    }
  );
});
