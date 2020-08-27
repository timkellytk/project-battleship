import { player, computer } from './Player';

describe('player().attack() method', () => {
  test('returns null if coordinates does not exist', () => {
    /*     expect(player().attack('Z', 1, computer())).toEqual(null);
     */
  });
  test('returns null if coordinates have already been hit', () => {});
  test('returns the enemy object with {hit = true} on relevant coordinates', () => {});
  test('returns the enemy object with an extra "HIT" on the hitArray of the relevant ship', () => {});
});
