export const splitColorAndNamePiece = (
  chessPosition: Record<string, string>,
  cell: string
) => {
  // !TODO: как то получше придумать проверку
  return chessPosition[cell] ? chessPosition[cell].split("_") : [];
};
