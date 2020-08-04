import { hitShip, isSunk, shipFactory } from './Ship';

describe('hitShip()', () => {
  test('adds "HIT" to an empty array', () => {
    const testArray = [];
    hitShip(testArray);
    expect(testArray).toEqual(['HIT']);
  });
  test('adds "HIT" an existing array', () => {
    const testArray = ['HIT', 'HIT', 'HIT'];
    hitShip(testArray);
    expect(testArray).toEqual(['HIT', 'HIT', 'HIT', 'HIT']);
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
  test('returns a hit() method', () => {
    expect(shipFactory(2)).toHaveProperty('hit');
  });
});
