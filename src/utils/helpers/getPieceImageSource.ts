import { GetPieceImageSourceProps } from "types/utils";
import { piecesImages } from "utils/config/piecesImages.config";

export const getPieceImageSource: GetPieceImageSourceProps = (piece) => {
  return piece ? piecesImages[piece] : undefined;
};
