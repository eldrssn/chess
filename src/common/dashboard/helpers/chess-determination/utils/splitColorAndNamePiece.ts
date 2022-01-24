export const splitColorAndNamePiece = (
  chessPosition: Record<string, string>,
  cell: string
) => {
  return chessPosition[cell] ? chessPosition[cell].split("_") : [];
};
