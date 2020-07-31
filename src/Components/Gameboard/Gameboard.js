import { shipFactory } from '../Ship/Ship';

export const createBoard = () => {
  const board = {};
  const col = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const rows = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const cell = { ship: null, hit: null };

  col.forEach((letter) => {
    const letterObject = {};
    rows.forEach((number) => {
      letterObject[number] = cell;
    });
    board[letter] = letterObject;
  });

  return board;
};

export const placeShip = (col, row, ship, shipBoard, vertical) => {
  let updatedGameboard = shipBoard;
  let activeCol = col;
  let activeRow = row;

  for (let i = 0; i < ship.length; i += 1) {
    const updatedRow = {
      ...updatedGameboard.board[activeCol][activeRow],
      ship,
    };
    const updatedCol = {
      ...updatedGameboard.board[activeCol],
      [activeRow]: updatedRow,
    };
    const updatedBoard = {
      ...updatedGameboard.board,
      [activeCol]: updatedCol,
    };
    updatedGameboard = {
      ...updatedGameboard,
      board: updatedBoard,
    };
    if (vertical) {
      activeRow += 1;
    } else {
      const activeColASCII = activeCol.charCodeAt(0) + 1;
      activeCol = String.fromCharCode(activeColASCII);
    }
  }
  return updatedGameboard;
};

export const receiveAttack = (col, row, shipBoard) => {
  const updatedRow = {
    ...shipBoard.board[col][row],
    hit: true,
  };
  const updatedCol = {
    ...shipBoard.board[col],
    [row]: updatedRow,
  };
  const updatedBoard = {
    ...shipBoard.board,
    [col]: updatedCol,
  };
  const updatedGameboard = {
    ...shipBoard,
    board: updatedBoard,
  };
  return updatedGameboard;
};

export const checkGameover = (ships) => {
  const sunkArray = Object.keys(ships).map((key) => {
    const ship = ships[key];
    const { sunk } = ship;
    return sunk;
  });
  const isGameover = sunkArray.reduce((cur, prev) => prev && cur);
  return isGameover;
};

export const gameboard = () => {
  const board = createBoard();
  const ships = {
    carrier: shipFactory(5),
    battleship: shipFactory(4),
    cruiser: shipFactory(3),
    submarine: shipFactory(3),
    destroyer: shipFactory(2),
  };
  const game = {
    board,
    ships,
    placeShip,
    receiveAttack,
  };
  return game;
};
