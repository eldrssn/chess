import React, { useState } from "react";

import { Cells } from "common/cells";
import { CellsEventProps } from "./types";
import { CellsLayout } from "layouts/cells-layout";

export const Dashboard = () => {
  const [choosenCell, setChoosenCell] = useState<string>("");

  // getChoosenCell
  const onCellsClick = (event: CellsEventProps) => {
    setChoosenCell(event.target.id);
  };

  return (
    <CellsLayout onClick={onCellsClick}>
      <Cells choosenCell={choosenCell} />
    </CellsLayout>
  );
};
