import React, { useState } from "react";

import { Schema } from "common/schema";
import { SchemaLayout } from "layouts/schema-layout";
import { SchemaEventProps } from "./types";

export const Dashboard = () => {
  const [choosenCell, setChoosenCell] = useState<string>("");

  // getChoosenCell
  const onSchemaClick = (event: SchemaEventProps) => {
    setChoosenCell(event.target.id);
  };

  return (
    <SchemaLayout onClick={onSchemaClick}>
      <Schema choosenCell={choosenCell} />
    </SchemaLayout>
  );
};
