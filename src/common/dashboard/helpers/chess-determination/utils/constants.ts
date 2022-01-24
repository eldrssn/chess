export enum PIECES_NAMES {
  ROOK = "rook",
  KNIGHT = "knight",
  BISHOP = "bishop",
  KING = "king",
  QUEEN = "queen",
  PAWN = "pawn",
}

export const BISHOP_DIRECTIONS = ["upRight", "upLeft", "downRight", "downLeft"];

export const ROOK_DIRECTIONS = ["up", "left", "right", "down"];

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
