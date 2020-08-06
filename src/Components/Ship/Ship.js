export const hitShip = (array) => {
  const updatedArray = [...array, 'HIT'];
  return updatedArray;
};
export const isSunk = (hitArray, length) => length === hitArray.length;

export const shipFactory = (shipLength) => {
  const length = shipLength;
  const hitArray = [];

  return {
    length,
    hitArray,
    hit() {
      return hitShip(this.hitArray);
    },
    sunk: () => isSunk(hitArray, length),
  };
};
