export interface IIsCellEmpty {
  chessPosition: Record<string, string>;
  cell: string;
}

export interface IIsCellHasColor extends IIsCellEmpty {
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

export interface ISplitColorAndNamePiece extends IIsCellEmpty {}
