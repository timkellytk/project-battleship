import { hit, isSunk, shipFactory } from './Ship';

describe('hit()', () => {
  test('returns a new array ["HIT"]', () => {
    expect(hit([])).toEqual(['HIT']);
  });
  test('returns an existing array with an extra "HIT"', () => {
    const array = ['HIT', 'HIT', 'HIT'];
    expect(hit(array)).toEqual(['HIT', 'HIT', 'HIT', 'HIT']);
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
  test('returns the expected object with length equal to 2', () => {
    expect(shipFactory(2)).toEqual({
      length: 2,
      hitArray: [],
      sunk: false,
      hit,
      isSunk,
    });
  });
});
