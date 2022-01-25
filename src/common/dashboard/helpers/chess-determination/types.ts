import { IIsCellEmpty } from "./utils/types";

export interface IGetRookNextCellPosition {
  direction: string;
  i: number;
}

export interface IGetBishopNextCellPosition extends IGetRookNextCellPosition {}

export interface IPieceValidation {
  pieceColor: string;
  currentPosition: string;
  chessPosition: Record<string, string>;
}

export interface IValidateMoves extends IIsCellEmpty {}
