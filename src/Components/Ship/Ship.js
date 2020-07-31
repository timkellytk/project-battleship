export const hit = (array) => {
  const hitArray = [...array];
  hitArray.push('HIT');
  return hitArray;
};
export const isSunk = (hitArray, shipLength) => {
  return shipLength === hitArray.length;
};

export const shipFactory = (length) => {
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
