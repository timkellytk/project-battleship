export function hitShip(array) {
  array.push('HIT');
}
export const isSunk = (hitArray, length) => length === hitArray.length;

export const shipFactory = (shipLength) => {
  const length = shipLength;
  const hitArray = [];

  return {
    length,
    hitArray,
    hit() {
      hitShip(this.hitArray);
    },
    sunk: () => isSunk(hitArray, length),
  };
};
