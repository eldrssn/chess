export const getPawnOffset = (isWhite: boolean) => {
  return {
    moves: [
      [0, isWhite ? -1 : 1],
      [0, isWhite ? -2 : 2],
    ],
    captureMoves: [
      [1, isWhite ? -1 : 1],
      [-1, isWhite ? -1 : 1],
    ],
  };
};
