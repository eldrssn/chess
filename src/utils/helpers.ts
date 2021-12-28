import { piecesImages } from "utils/piecesImages.config";

import { GetPieceImageSourceProps } from "./types";

export const getPieceImageSource: GetPieceImageSourceProps = (piece) => {
  return piecesImages[piece];
};
