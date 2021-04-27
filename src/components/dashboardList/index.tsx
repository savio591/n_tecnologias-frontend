import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ApiContext } from "../../context";

export default function DashboardList() {
  const { dashboardList } = useContext(ApiContext);
  return (
    <>
      <div className="dashboardList">
        {dashboardList ? (
          <>
            <article id="recents" className="cardList shadowCard">
              <h1>Recentes</h1>
              <ul className="cards">
                {dashboardList.recents.map((l) => 
                  <li className="card shadowCardRounded">
                    <Link to={"/dashboard"+l.link}>
                      <i className="boxWhiteGradientUp"></i>
                      <h2>{l.title}</h2>
                      <img src={l.image} alt="dashboard" />
                    </Link>
                  </li>
                )}
              </ul>
            </article>

            <article id="starred" className="cardList shadowCard">
              <h1>Favoritos</h1>
              <ul className="cards">
                {dashboardList.starred.map((l) => 
                  <li className="card shadowCardRounded">
                    <Link to={"/dashboard"+l.link}>
                      <i className="boxWhiteGradientUp"></i>
                      <h2>{l.title}</h2>
                      <img src={l.image} alt="dashboard" />
                    </Link>
                  </li>
                )}
              </ul>
            </article>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
