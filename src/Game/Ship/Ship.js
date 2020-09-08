class Ship {
  constructor(col, row, shipLength = 1, orientation = true) {
    this.length = shipLength;
    this.startCoordinate = { col, row };
    this.orientation = orientation;
    this.hitCount = 0;
  }
  getCoordinates() {
    const { col, row } = this.startCoordinate;
    const coords = [...Array(this.length)];
    return coords.map((_, index) => {
      if (this.orientation) {
        return { col, row: row + index };
      }
    });
  }
  hit() {
    this.hitCount += 1;
  }
}

export default Ship;
