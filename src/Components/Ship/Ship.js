const hit = (position, array) => {
  const hitArray = [...array];
  hitArray[position] = 'HIT';
  return hitArray;
};
const isSunk = (hitArray) => {
  const shipLength = hitArray.length;
  const hitLength = hitArray.filter((item) => item === 'HIT').length;
  return shipLength === hitLength;
};

const shipFactory = (length) => {
  const hitArray = new Array(length);
  const sunk = false;

  return {
    length,
    hitArray,
    sunk,
    hit,
    isSunk,
  };
};

export default shipFactory;

module.exports.shipFactory = shipFactory;
module.exports.hit = hit;
module.exports.isSunk = isSunk;
