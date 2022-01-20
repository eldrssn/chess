export enum PIECES_NAMES {
  ROOK = "rook",
  KNIGHT = "knight",
  BISHOP = "bishop",
  KING = "king",
  QUEEN = "queen",
  PAWN = "pawn",
}

export enum DIRECTIONS {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  UP_RIGHT = "upRight",
  UP_LEFT = "upLeft",
  DOWN_RIGHT = "downRight",
  DOWN_LEFT = "downLeft",
}

export const WHITE_PAWN_DEFAULT_ROW = "2";
export const BLACK_PAWN_DEFAULT_ROW = "7";

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
