import computer from './Computer';
import player from './Player';
import { rows, columns } from '../Constants/Constants';

describe('computer().gameboard property', () => {
  test('computer() returns an object with gameboard property', () => {
    expect(computer()).toHaveProperty('gameboard');
  });
  test('computer().gameboard is an object with appropriate properties', () => {
    const gameboard = computer().gameboard;

    expect(gameboard).toHaveProperty('board');
    expect(gameboard).toHaveProperty('ships');
    expect(gameboard).toHaveProperty('placeShip');
    expect(gameboard).toHaveProperty('receiveAttack');
    expect(gameboard).toHaveProperty('checkGameover');
  });
});

describe('computer().attack() method', () => {
  test('return an updated player with a hit to the enemy ship on coordinates', () => {
    // Create player with a ship on every coordinate
    const testPlayer = player();
    const testShip = testPlayer.gameboard.ships.carrier;
    columns.forEach((c) => {
      rows.forEach((r) => {
        testPlayer.gameboard.board[c][r].ship = testShip;
      });
    });
    // Get updated player
    const updatedPlayer = computer().attack(testPlayer);
    expect(updatedPlayer.gameboard.ships.carrier.hitArray).toEqual(['HIT']);
  });
  test('returns an updated player with {hit: true} on random coordinates', () => {
    // Create player
    const testPlayer = player();
    // Get updated player
    const updatedPlayer = computer().attack(testPlayer);
    // Loop updated player's gameboard to check if curPlayer.hit !== prevPlayer.hit
    let updatedHit = false;
    columns.forEach((c) => {
      rows.forEach((r) => {
        const curPlayer = updatedPlayer.gameboard.board[c][r];
        const prevPlayer = testPlayer.gameboard.board[c][r];
        if (curPlayer.hit !== prevPlayer.hit) {
          updatedHit = true;
        }
      });
    });

    expect(updatedHit).toBeTruthy();
  });
  test('returns an updated player when there is 1 spot left on gameboard', () => {
    // Create player
    const testPlayer = player();
    // Loop the player gameboard to set {hit:true} for every coordinate
    columns.forEach((c) => {
      rows.forEach((r) => {
        testPlayer.gameboard.board[c][r].hit = true;
      });
    });
    // For A1 set {hit: false}
    testPlayer.gameboard.board.A[1].hit = null;
    // Get updatedPlayer
    const updatedPlayer = computer().attack(testPlayer);
    // Expect A1 to be true and updatedPlayer to have all appropriate properties
    const gameboard = updatedPlayer.gameboard;
    expect(gameboard.board.A[1].hit).toBeTruthy();
    expect(gameboard).toHaveProperty('ships');
    expect(gameboard).toHaveProperty('placeShip');
    expect(gameboard).toHaveProperty('receiveAttack');
    expect(gameboard).toHaveProperty('checkGameover');
  });
});
