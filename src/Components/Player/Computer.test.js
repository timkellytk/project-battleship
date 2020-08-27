import computer from './Computer';

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

describe('computer().attack() method', () => {});
