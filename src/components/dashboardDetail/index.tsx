import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiContext } from "../../context";

interface paramModel {
  id: string;
}

export default function DashboardDetail() {
  const { id }: paramModel = useParams();
  const { dashboards } = useContext(ApiContext);
  const dashboard = dashboards.find((f) => f.id === id);
  console.log({id, dashboards, dashboard, params: useParams()})
  return (
    <>
      <div className="dashboardDetails">
        <article>
          {dashboard ? (
            <iframe
              src={dashboard.link}
              frameBorder="0"
              allowFullScreen={true}
              width="100%"
              height="100%"
            ></iframe>
          ) : (
            ""
          )}
        </article>
      </div>
    </>
  );
}
