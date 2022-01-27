export interface IValidateCellPosition {
  chessPosition: Record<string, string>;
  cell: string;
}

export interface IIsCellEmpty extends IValidateCellPosition {}

export interface IIsCellHasColor extends IValidateCellPosition {
  pieceColor: string;
}

export interface IGetCellPosition {
  char: string;
  number: string;
}

export interface IGetAllCellsPositionsByOffset {
  currentPosition: string;
  offsets: number[][];
}

export interface ISplitColorAndNamePiece extends IValidateCellPosition {}
