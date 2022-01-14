export const getPieceTypeName = (pieceType?: string) => {
  if (pieceType) {
    const [, pieceTypeName] = pieceType.split("_");

    return pieceTypeName;
  }
};
