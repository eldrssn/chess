export enum PIECES_NAMES {
  ROOK = "rook",
  KNIGHT = "knight",
  BISHOP = "bishop",
  KING = "king",
  QUEEN = "queen",
  PAWN = "pawn",
}

export const whitePawnDefaultRow = "2";
export const blackPawnDefaultRow = "7";

export const KING_OFFSET_POSITIONS = [
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
];

export const KNIGHT_OFFSET_POSITIONS = [
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
];
