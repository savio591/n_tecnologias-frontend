import React, { BaseSyntheticEvent, useContext } from "react";
import { Link } from "react-router-dom";

import { ApiContext } from "../../context";

import "../../styles/sidebar.css";
import businessLogo from "../../assets/logo_business.svg";

export default function Sidebar() {
  const { user, type, navmap } = useContext(ApiContext);
  const baseDashboardSect = "/dashboard";

  const buttonToogler = (data: BaseSyntheticEvent) => {
    const btn = data.target;
    document.querySelector(".sidebarToogler").classList.toggle("hidded");

    document.querySelector("#Sidebar").classList.toggle("hidded");
    btn.parentElement
      .querySelector(".showSidebarIcon")
      .classList.toggle("hidded");
  };

  const listToogler = (data: BaseSyntheticEvent) => {
    const list = data.target;
    list.parentElement.querySelector(".nested").classList.toggle("active");
    list.classList.toggle("caret-down");
  };

  return (
    <>
      <div className="sidebarComponent">
        <button
          onClick={(data) => buttonToogler(data)}
          type="button"
          className="sidebarToogler"
        >
          <i className="showSidebarIcon"></i>
        </button>
        <section id="Sidebar" className="shadowCard">
          <img
            className="businessLogo"
            src={businessLogo}
            alt="logo da empresa"
          />
          <div className="profile separatorLineInBox">
            <h1>{user}</h1>
            <h2>{type}</h2>
          </div>
          <nav className="navbars">
            {navmap.map((l) => {
              return (
                <ul id="nav1" className="shadowNavBox">
                  <li>
                    <span
                      onClick={listToogler}
                      className={"caret " + (l.active ? "caret-down" : "")}
                    >
                      {l.title}
                    </span>
                    <ul className={"nested " + (l.active ? "active" : "")}>
                      {l.lists.map((li) => {
                        return (
                          <li>
                            <Link
                              className={li.active ? "selected" : ""}
                              to={baseDashboardSect + li.link}
                            >
                              {li.listname}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              );
            })}
          </nav>
          <footer className="opts">
            <a href="./" className="linkWithIcon">
              <i className="configIcon"></i>
              <p>Configurações</p>
            </a>
            <a href="./" className="linkWithIcon">
              <i className="helpIcon"></i>
              <p>Ajuda</p>
            </a>
          </footer>
        </section>
      </div>
    </>
  );
}
