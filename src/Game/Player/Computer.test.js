import Computer from './Computer';
import Player from './Player';

describe('Computer', () => {
  let computer;
  let player;
  beforeEach(() => {
    computer = new Computer();
    player = new Player();
  });

  test('Gameboard and properties exist', () => {
    expect(computer.gameboard).toBeTruthy();
    expect(computer.gameboard.getGameboard).toBeTruthy();
    expect(computer.gameboard.getShips).toBeTruthy();
    expect(computer.gameboard.intialiseShips).toBeTruthy();
    expect(computer.gameboard.randomiseShips).toBeTruthy();
    expect(computer.gameboard.moveShip).toBeTruthy();
    expect(computer.gameboard.toggleShip).toBeTruthy();
    expect(computer.gameboard.gameover).toBeTruthy();
  });

  test('attack() for empty coords', () => {
    const prevGameboard = [...player.gameboard.getGameboard()];
    expect(computer.attack(player)).toEqual('MISS');
    expect(player.gameboard.getGameboard() !== prevGameboard).toBe(true);
  });
  test('attack() returns a valid value for all cords', () => {
    let i = 0;
    while (i < 100) {
      const prevGameboard = [...player.gameboard.getGameboard()];
      computer.attack(player);
      expect(player.gameboard.getGameboard() !== prevGameboard).toBe(true);
      i++;
    }
  });
  // Skipped test attack() for coords with a ship since you can't predict where to place ships
  // Player.test.js already tests this outcome with predictable coords
});
