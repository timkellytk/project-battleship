export const hitShip = (array) => {
  const updatedArray = [...array, 'HIT'];
  return updatedArray;
};
export const isSunk = (hitArray, length) => length === hitArray.length;

export const shipFactory = (shipLength, id) => {
  const length = shipLength;
  const hitArray = [];

  return {
    id,
    length,
    hitArray,
    hit() {
      return hitShip(this.hitArray);
    },
    sunk() {
      return isSunk(this.hitArray, this.length);
    },
  };
};
