import Player from './Player';

describe('Player', () => {
  let player;
  let enemy;
  beforeEach(() => {
    player = new Player();
    enemy = new Player();
  });

  test('Gameboard and properties exist', () => {
    expect(player.gameboard).toBeTruthy();
    expect(player.gameboard.getGameboard).toBeTruthy();
    expect(player.gameboard.getShips).toBeTruthy();
    expect(player.gameboard.intialiseShips).toBeTruthy();
    expect(player.gameboard.randomiseShips).toBeTruthy();
    expect(player.gameboard.moveShip).toBeTruthy();
    expect(player.gameboard.toggleShip).toBeTruthy();
    expect(player.gameboard.gameover).toBeTruthy();
  });

  test.each([
    [0, 0, 0, 'SUNK'],
    [3, 3, 3, 'SUNK'],
    [5, 1, 7, 'HIT'],
  ])('attack() for coords with ship', (col, row, shipIndex, expectedResult) => {
    enemy.gameboard.intialiseShips();

    // Remove randomness by excluding tests when moveShip is not possible
    if (enemy.gameboard.moveShip(col, row, shipIndex)) {
      expect(player.attack(col, row, enemy)).toMatch(
        new RegExp('(?:HIT|SUNK)')
      );
      expect(enemy.gameboard.getShips()[shipIndex].hitCount).toEqual(1);
      expect(enemy.gameboard.getGameboard()[col][row]).toEqual(expectedResult);
    }
  });

  test.each([
    [0, 0],
    [3, 3],
    [5, 1],
  ])('attack() for empty coords', (col, row) => {
    expect(player.attack(col, row, enemy)).toEqual('MISS');
    expect(enemy.gameboard.getGameboard()[col][row]).toEqual('MISS');
  });
});
