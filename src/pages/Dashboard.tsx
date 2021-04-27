import "../styles/dashboard.css";

import DashboardList from "../components/dashboardList";
import React from "react";
import Header from "../components/headerGreetings";
import Sidebar from "../components/sidebar";
import { ApiProvider } from "../context";

export default function Dashboard() {
  document.title = "N Tecnologias | Dashboard";
  return (
    <ApiProvider>
      <Sidebar />
      <div id="DashboardListContainer">
        <Header />
        <DashboardList />
      </div>
    </ApiProvider>
  );
}
