class Ship {
  constructor(col, row, shipLength = 1, orientation = true) {
    this.length = shipLength;
    this.hitCount = 0;
    this.startCoordinate = { col, row };
    this.orientation = orientation;
  }
  toggleOrientation() {
    this.orientation = !this.orientation;
  }
  getCoordinates(
    startCoordinate = this.startCoordinate,
    orientation = this.orientation
  ) {
    const { col, row } = startCoordinate;
    const coords = [...Array(this.length)];
    return coords.map((_, index) =>
      orientation ? { col, row: row + index } : { col: col + index, row }
    );
  }
  hit() {
    this.hitCount += 1;
  }
  isSunk() {
    return this.length === this.hitCount;
  }
}

export default Ship;
