import React from "react";
import { Link } from "react-router-dom";

export default function DashboardList() {
  return (
    <>
      <div className="dashboardList">
        <article id="recents" className="cardList shadowCard">
          <h1>Recentes</h1>
          <ul className="cards">
            <li className="card shadowCardRounded">
              <Link to="./">
                <i className="boxWhiteGradientUp"></i>
                <h2>DRE FINANCEIRO</h2>
                <img src="../assets/DRE_min.png" alt="dashboard" />
              </Link>
            </li>
            <li className="card shadowCardRounded">
              <a href="./">
                <i className="boxWhiteGradientUp"></i>
                <h2>OPERACIONAL</h2>
                <img src="../assets/visãoGeral_min.png" alt="dashboard" />
              </a>
            </li>
            <li className="card shadowCardRounded">
              <a href="./">
                <i className="boxWhiteGradientUp"></i>
                <h2>VISÃO EXPRESSA</h2>
                <img src="../assets/visaoExpressa_min 1.jpg" alt="dashboard" />
              </a>
            </li>
          </ul>
        </article>

        <article id="starred" className="cardList shadowCard">
          <h1>Favoritos</h1>
          <ul className="cards">
            <li className="card shadowCardRounded">
              <a href="./">
                <i className="boxWhiteGradientUp"></i>
                <h2>DRE FINANCEIRO</h2>
                <img src="../assets/DRE_min.png" alt="dashboard" />
              </a>
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}
