import React from "react";

import { DashboardLayout } from "layouts/dashboard-layout";

import { Header } from "common/header";
import { Dashboard } from "common/dashboard";
import { InfoBlock } from "common/info-block";
import { CHESS_COLORS } from "store/reducers/current-move/types";

export const GamePage: React.FC = () => (
    <>
        <Header />
        <DashboardLayout>
            <InfoBlock turn={CHESS_COLORS.BLACK} />
            <Dashboard />
            <InfoBlock turn={CHESS_COLORS.WHITE} />
        </DashboardLayout>
    </>
);
