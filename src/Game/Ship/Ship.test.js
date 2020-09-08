/* 
Notes on what Ships need: 
ShipFactory(length, col, row, orientation )
- length = length
- hitCount = 0
- firstCoordinate = [col, row]
- orientation = vertical || horizontal)
- getLength() = return length
- getShipCoordinates() = e.g. [coordinate1, coordinate2, coordinate3]
- hit() = add 1 to hitCount
- isSunk() = if length === hitCount
*/
import Ship from './Ship';

describe('Ship', () => {
  let ship;
  beforeEach(() => {
    ship = new Ship(0, 0, 4);
  });

  test('creates expected ship', () => {
    expect(ship.length).toBe(4);
    expect(ship.startCoordinate).toEqual({ col: 0, row: 0 });
    expect(ship.orientation).toEqual(true);
    expect(ship.getCoordinates()).toEqual([
      { col: 0, row: 0 },
      { col: 0, row: 1 },
      { col: 0, row: 2 },
      { col: 0, row: 3 },
    ]);
  });
});
