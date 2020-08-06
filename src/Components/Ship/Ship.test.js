import { hitShip, isSunk, shipFactory } from './Ship';

describe('hitShip()', () => {
  test('accepts an empty array and returns an array with "HIT" added', () => {
    expect(hitShip([])).toEqual(['HIT']);
  });
  test('accepts an existing array and returns an array with "HIT" added', () => {
    expect(hitShip(['HIT', 'HIT', 'HIT'])).toEqual([
      'HIT',
      'HIT',
      'HIT',
      'HIT',
    ]);
  });
});

describe('isSunk()', () => {
  test('returns true for ["HIT"] array and shipLength 1', () => {
    const array = ['HIT'];
    expect(isSunk(array, 1)).toEqual(true);
  });
  test('returns false for ["HIT"] array and shipLength 2', () => {
    const array = ['HIT'];
    expect(isSunk(array, 2)).toEqual(false);
  });
});

describe('shipFactory()', () => {
  test('returns the expected length property', () => {
    expect(shipFactory(2).length).toEqual(2);
  });
  test('returns the expected hitArray property', () => {
    expect(shipFactory(2).hitArray).toEqual([]);
  });
  test('returns the expected sunk property', () => {
    expect(shipFactory(2)).toHaveProperty('sunk');
  });
  test('returns the expected hit() method', () => {
    const testShip = shipFactory(3);
    testShip.hitArray = testShip.hit();
    testShip.hitArray = testShip.hit();
    expect(testShip.hitArray).toEqual(['HIT', 'HIT']);
    expect(shipFactory(2)).toHaveProperty('hit');
  });
});
