const ship = require('./Ship');

describe('hit()', () => {
  test('hit(0, new Array(1)) will return a new array with [HIT]', () => {
    const array = new Array(1);
    expect(ship.hit(0, array)).toEqual(['HIT']);
  });
  test('hit(3, new Array(4)) will return a new array with [undefined, undefined, undefined, HIT]', () => {
    const array = new Array(4);
    expect(ship.hit(3, array)).toEqual([
      undefined,
      undefined,
      undefined,
      'HIT',
    ]);
  });
});

describe('isSunk()', () => {
  test('isSunk(["HIT"])', () => {
    const array = ['HIT'];
    expect(ship.isSunk(array)).toEqual(true);
  });
  test('isSunk(["HIT", undefined])', () => {
    const array = ['HIT', undefined];
    expect(ship.isSunk(array)).toEqual(false);
  });
});

describe('shipFactory()', () => {
  test('shipFactory(2) will return object with length = 2, hitArray = [undefined, undefined], sunk = false, isSunk and hit methods', () => {
    expect(ship.shipFactory(2)).toEqual({
      length: 2,
      hitArray: [undefined, undefined],
      sunk: false,
      hit: ship.hit,
      isSunk: ship.isSunk,
    });
  });
});
