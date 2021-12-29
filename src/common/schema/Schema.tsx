import React from "react";

import { useTypedSelector } from "hooks/useTypedSelector";
import { selectPiecesPosition } from "store/reducers/schemaPosition/selectors";

import { Cell } from "../cell";

import { getBoardArray } from "./helpers/getBoardArray";

import { SchemaProps } from "types/common";

export const Schema: React.FC<SchemaProps> = ({ choosenCell }) => {
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
