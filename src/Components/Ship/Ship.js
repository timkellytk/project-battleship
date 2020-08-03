export const hit = (array) => {
  const hitArray = [...array];
  hitArray.push('HIT');
  return hitArray;
};
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
    hit,
    isSunk,
  };
};
