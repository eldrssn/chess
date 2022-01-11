import React from "react";

import { DashboardLayout } from "layouts/dashboard-layout";

import { Header } from "common/header";
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
