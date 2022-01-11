import {
  TCapturePiecePayload,
  TSetChoosenPiecePayload,
  typesCurrentMove,
} from "./types";

export const setChoosenPiece = (payload: TSetChoosenPiecePayload) => {
  return {
    type: typesCurrentMove.SET_CHOOSEN_PIECE,
    payload,
  };
};

export const changeTurn = () => {
  return {
    type: typesCurrentMove.CHANGE_TURN,
  };
};

export const capturePiece = (payload: TCapturePiecePayload) => {
  return {
    type: typesCurrentMove.CAPTURE_PIECE,
    payload,
  };
};
