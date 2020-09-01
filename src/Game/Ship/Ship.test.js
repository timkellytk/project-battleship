import shipFactory from './Ship';

describe('shipFactory() properties', () => {
  test('id returns the expected string', () => {
    expect(shipFactory(2, 'submarine').id).toEqual('submarine');
    expect(shipFactory(2, 'destroyer').id).toEqual('destroyer');
  });
  test('length returns the expected value', () => {
    expect(shipFactory(2).length).toEqual(2);
    expect(shipFactory(4).length).toEqual(4);
  });
  test('hitArray returns the expected empty array', () => {
    expect(shipFactory(2).hitArray).toEqual([]);
  });
});

describe('shipFactory() methods', () => {
  test('hit() returns an array ["HIT"] on an empty ship', () => {
    expect(shipFactory(2).hit()).toEqual(['HIT']);
  });
  test('hit() returns an array ["HIT", "HIT"] on a ship with a hitArray ["HIT"]', () => {
    // Create ship with previous hit
    const hitShip = shipFactory(2);
    hitShip.hitArray = hitShip.hit();

    expect(hitShip.hit()).toEqual(['HIT', 'HIT']);
  });
  test('sunk() returns false for ships that have not been sunk', () => {
    expect(shipFactory(2).sunk()).toEqual(false);
  });
  test('sunk() returns true for ships that have been sunk', () => {
    // Create sunk ship
    const shipSunk = shipFactory(2);
    shipSunk.hitArray = ['HIT', 'HIT'];

    expect(shipSunk.sunk()).toEqual(true);
  });
});
