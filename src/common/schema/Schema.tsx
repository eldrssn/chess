import React, { FC } from "react";
import { selectPiecesPosition } from "store/reducers/schemaPosition/selectors";
import { Cell } from "../cell";
import { getBoardArray } from "./helpers/getBoardArray";
import { useTypedSelector } from "hooks/useTypedSelector";
import { SchemaProps } from "./types";

export const Schema: FC<SchemaProps> = ({ choosenCell }) => {
  const schema = getBoardArray(true);

  const piecesPosition = useTypedSelector(selectPiecesPosition);

  return (
    <>
      {schema.map((cell) => (
        <Cell
          key={cell}
          cell={cell}
          piece={piecesPosition[cell]}
          choosenCell={choosenCell}
        />
      ))}
    </>
  );
};
