import { BaseSyntheticEvent } from "react";
import "../../styles/sidebar.css";

export default function Sidebar() {
  const buttonToogler = (data: BaseSyntheticEvent) => {
    const btn = data.target;
    document.querySelector(".sidebarToogler").classList.toggle("hidded");

    document.querySelector("#Sidebar").classList.toggle("hidded");
    btn.parentElement
      .querySelector(".showSidebarIcon")
      .classList.toggle("hidded");
  };

  const listToogler = (data) => {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
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
            src="../assets/logo_business.svg"
            alt="logo da empresa"
          />
          <div className="profile separatorLineInBox">
            <h1>Administrador</h1>
            <h2>Diretor</h2>
          </div>
          <nav className="navbars">
            {/* <!-- <ul id="nav1" className="shadowNavBox">
                    <li><span className="caret caret-down">
                            FINANCEIRO
                        </span>
                        <ul className="nested active">
                            <li>
                                <a className="selected" href="./">DRE</a>
                            </li>
                            <li>
                                <a href="./">
                                    DRE ANALÍTICO
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul id="nav2" className="shadowNavBox">
                    <li><span className="caret">
                            OPERACIONAL
                        </span>
                        <ul className="nested active">
                            <li>
                                <a href="./">Visão Geral</a>
                            </li>
                            <li>
                                <a href="./">
                                    Share operações
                                </a>
                            </li>
                            <li>
                                <a href="./">
                                    Desempenho
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul id="nav3" className="shadowNavBox">
                    <li><span className="caret">
                            VISÃO GERAL
                        </span>
                    </li>
                </ul> --> */}
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
