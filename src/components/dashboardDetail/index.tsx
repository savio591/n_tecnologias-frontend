import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../context";

interface paramModel {
  id: string;
}

export default function DashboardDetail() {
  const { id }: paramModel = useParams();
  const { dashboards } = useContext(ApiContext);
  const dashboard = dashboards.find((f) => f.id === id);
  document.title = "N Tecnologias | Dashboard"
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
