import { attack } from './Player';
import { gameboard } from '../Gameboard/Gameboard';
import { shipFactory } from '../Ship/Ship';

describe('attack()', () => {
  test('player can attack enemy gameboard on empty cell', () => {
    const initalGameboard = gameboard();
    const testRow = { ...initalGameboard.board.A[1], hit: true };
    const testCol = { ...initalGameboard.board.A, 1: testRow };
    const testBoard = { ...initalGameboard.board, A: testCol };
    const testGameboard = { ...initalGameboard, board: testBoard };

    expect(attack('A', 1, initalGameboard)).toEqual(testGameboard);
  });

  test('player can attack enemy gameboard on cell with ship', () => {
    const initalGameboard = gameboard();
    const initialShip = shipFactory(2);
    initalGameboard.placeShip('B', 1, initialShip, initalGameboard);
    const testRow = { ...initalGameboard.board.A[1], hit: true };
    const testCol = { ...initalGameboard.board.A, 1: testRow };
    const testBoard = { ...initalGameboard.board, A: testCol };
    const testGameboard = { ...initalGameboard, board: testBoard };

    expect(attack('A', 1, initalGameboard)).toEqual(testGameboard);
  });
});
