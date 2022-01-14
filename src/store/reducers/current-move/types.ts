import { IAction } from "types/store";

export enum typesCurrentMove {
  SET_CHOOSEN_PIECE = "SET_CHOOSEN_PIECE",
  CHANGE_TURN = "CHANGE_TURN",
  CAPTURE_PIECE = "CAPTURE_PIECE",
}

export enum CHESS_COLORS {
  WHITE = "white",
  BLACK = "black",
}

export type COLOR = CHESS_COLORS;

export type TSetChoosenPiecePayload = {
  fromCell: string;
  choosenPiece: string;
};

export type TCapturePiecePayload = string;

export interface ICurrentMoveState {
  choosenPieceType: null | string;
  fromCellPosition: null | string;
  toCellPosition: null | string;
  chessPlayerColor: COLOR;
  captureByBlackChess: string[];
  captureByWhiteChess: string[];
}

// !TODO: добавлять сюда все экшены, которые будут или нет?
export type TCurrentMoveActions = IAction<ICurrentMoveState>;
