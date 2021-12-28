import { withAppData } from "hocs/withAppData";
import React from "react";
import { AppLayout } from "./layouts/app-layout/AppLayout";
import { Routing } from "./routing";

function App() {
  return (
    <AppLayout>
      <Routing />
    </AppLayout>
  );
}

export default withAppData(App);
