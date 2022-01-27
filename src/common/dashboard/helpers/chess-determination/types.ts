import { IValidateCellPosition } from "./utils/types";

export interface IGetRookNextCellPosition {
  direction: string;
  i: number;
}

export interface IGetBishopNextCellPosition extends IGetRookNextCellPosition {}

export interface IPieceValidation extends IValidateCellPosition {
  pieceColor: string;
}

export interface IValidateMoves extends IValidateCellPosition {}
