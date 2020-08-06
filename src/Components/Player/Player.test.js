import { attack } from './Player';
import { gameboard } from '../Gameboard/Gameboard';

describe('attack()', () => {
  test('returns an updated board with {hit: true} on an empty cell', () => {
    const initialGameboard = gameboard();
    const testRow = { ...initialGameboard.board.A[1], hit: true };
    const testCol = { ...initialGameboard.board.A, 1: testRow };
    const testBoard = { ...initialGameboard.board, A: testCol };
    const testGameboard = { ...initialGameboard, board: testBoard };

    expect(attack('A', 1, initialGameboard)).toEqual(testGameboard);
  });

  test('returns an updated board with {hit: true} on a cell with a ship', () => {
    let initialGameboard = gameboard();
    const initialShip = initialGameboard.ships.carrier;
    initialGameboard = initialGameboard.placeShip(
      'B',
      1,
      initialShip,
      initialGameboard
    );
    const testRow = { ...initialGameboard.board.B[1], hit: true };
    const testCol = { ...initialGameboard.board.B, 1: testRow };
    const testBoard = { ...initialGameboard.board, B: testCol };
    const testGameboard = { ...initialGameboard, board: testBoard };

    expect(attack('B', 1, initialGameboard).board).toEqual(testGameboard.board);
  });

  test('returns an updated board with an extra hit on hitArray on the relevant ship', () => {
    let initialGameboard = gameboard();
    const testShip = initialGameboard.ships.carrier;
    initialGameboard = initialGameboard.placeShip(
      'C',
      1,
      testShip,
      initialGameboard
    );
    expect(attack('C', 1, initialGameboard).ships.carrier.hitArray).toEqual([
      'HIT',
    ]);
  });
});
