import React from "react";

import { Header } from "common/header";
import { DashboardLayout } from "layouts/dashboard-layout";
import { Dashboard } from "common/dashboard";
import { InfoBlock } from "common/info-block";

export const GamePage: React.FC = () => {
  return (
    <>
      <Header />
      <DashboardLayout>
        <InfoBlock isCurrentTurn={true} />
        <Dashboard />
        <InfoBlock isCurrentTurn={false} />
      </DashboardLayout>
    </>
  );
};
