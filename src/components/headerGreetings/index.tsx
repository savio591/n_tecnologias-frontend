import { useContext } from "react";
import { ApiContext } from "../../context";
import "../../styles/headerGreetings.css";

export default function Header() {
  const { user } = useContext(ApiContext);

  return (
    <>
      <header className="greetings shadowCard">
        <h1>
          Bem-vindo(a),&nbsp;
          <span className="userText" style={{ fontStyle: "italic" }}>
            {user}
          </span>
        </h1>
        <a href="../" className="logout linkWithIcon">
          <i className="logoutIcon"></i>
          <p>Sair</p>
        </a>
        <div className="mobile">
          <button>
            <i className="burguerIcon"></i>
          </button>
          <img src="../assets/logo_business.svg" alt="Logo da empresa" />
          <button>
            <i className="userMenuIcon"></i>
          </button>
        </div>
      </header>
    </>
  );
}
