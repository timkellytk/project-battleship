import player from './Player';
import computer from './Computer';

describe('player().attack() method', () => {
  test('returns the enemy object with {hit = true} on  coordinates', () => {
    const updatedEnemy = player().attack('A', 1, computer());
    expect(updatedEnemy.gameboard.board.A[1].hit).toEqual(true);
  });
  test('returns the enemy object with "HIT" on the hitArray of a relevant ship and {hit = true} on coordinates', () => {
    // Create computer() and place a ship on coordinates 'A1'
    const testComputer = computer();
    const testShip = testComputer.gameboard.ships.carrier;
    const testCoordinates = testComputer.gameboard.board.A[1];
    testCoordinates.ship = testShip;

    const updatedEnemy = player().attack('A', 1, testComputer);
    expect(updatedEnemy.gameboard.ships.carrier.hitArray).toEqual(['HIT']);
    expect(updatedEnemy.gameboard.board.A[1].hit).toEqual(true);
  });
  test('returns null if coordinates have already been hit', () => {
    // Create computer() and set {hit = true} for coordinates 'A1'
    const testComputer = computer();
    const testCoordinates = testComputer.gameboard.board.A[1];
    testCoordinates.hit = true;

    expect(player().attack('A', 1, testComputer)).toEqual(null);
  });
});
