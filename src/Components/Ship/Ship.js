export function hitShip(array) {
  array.push('HIT');
}
export const isSunk = (hitArray, length) => {
  return length === hitArray.length;
};

export const shipFactory = (shipLength) => {
  const length = shipLength;
  const hitArray = [];
  const sunk = false;

  return {
    length,
    hitArray,
    sunk,
    hit() {
      hitShip(this.hitArray);
    },
    isSunk,
  };
};
