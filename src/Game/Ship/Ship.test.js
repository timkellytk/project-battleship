import Ship from './Ship';

describe('Ship', () => {
  let ship;
  beforeEach(() => {
    ship = new Ship(0, 0, 4);
  });

  test('Creates expected ship', () => {
    expect(ship.length).toEqual(4);
    expect(ship.hitCount).toEqual(0);
    expect(ship.startCoordinate).toEqual({ row: 0, col: 0 });
    expect(ship.orientation).toEqual(true);
    expect(ship.getCoordinates()).toEqual([
      { row: 0, col: 0 },
      { row: 0, col: 1 },
      { row: 0, col: 2 },
      { row: 0, col: 3 },
    ]);
  });

  test('Toggle ship orientation', () => {
    ship.toggleOrientation();
    expect(ship.orientation).toEqual(false);
    expect(ship.getCoordinates()).toEqual([
      { row: 0, col: 0 },
      { row: 1, col: 0 },
      { row: 2, col: 0 },
      { row: 3, col: 0 },
    ]);
  });

  test('Count hits to ship', () => {
    ship.hit();
    ship.hit();
    expect(ship.hitCount).toEqual(2);
  });

  test('Find sunk ships', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toEqual(false);
    ship.hit();
    expect(ship.isSunk()).toEqual(true);
  });
});
