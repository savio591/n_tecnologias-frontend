import "../styles/dashboard.css";

import DashboardList from "../components/dashboardList";
import React from "react";
import Header from "../components/headerGreetings";
import Sidebar from "../components/sidebar";

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <div id="DashboardListContainer">
        <Header />
        <DashboardList />
      </div>
    </>
  );
}
