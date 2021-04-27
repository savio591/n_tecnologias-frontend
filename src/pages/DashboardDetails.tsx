import "../styles/dashboard.css";

import DashboardDetail from "../components/dashboardDetail";
import React from "react";
import Sidebar from "../components/sidebar";
import { ApiProvider } from "../context";
import Breadcrumb from "../components/breadcrumb";

export default function DashboardDetails() {
  return (
    <ApiProvider>
      <Sidebar />
      <div id="DashboardListContainer">
        <Breadcrumb />
        <DashboardDetail />
      </div>
    </ApiProvider>
  );
}
