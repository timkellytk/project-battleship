const shipFactory = (shipLength, id) => {
  const length = shipLength;
  const hitArray = [];

  return {
    id,
    length,
    hitArray,
    hit() {
      const updatedArray = [...this.hitArray, 'HIT'];
      return updatedArray;
    },
    sunk() {
      return this.hitArray.length === length;
    },
  };
};

export default shipFactory;
