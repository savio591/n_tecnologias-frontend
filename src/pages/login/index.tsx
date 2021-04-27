import "../../styles/main.css";
import "../../styles/login.css";
import "../../styles/icons.css";

import React, { useState } from "react";
import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";

interface formDataModel {
  username: string;
  password: string;
}

export default function Login() {
  const hist = useHistory();
  const loc = useLocation();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const Validate = () => {
    const condition =
      username === "admin" && password === "admin" ? true : false;
    event.preventDefault();
    if (condition) hist.push("/dashboard");
  };
  return (
    <>
      <div id="LoginPage">
        <article id="loginBox">
          <img src="../assets/logo_square.png" alt="logo" />
          <form onSubmit={Validate}>
            <div className="input">
              <i className="userIcon"></i>
              <input
                onChange={(event) => setUsername(event.target.value)}
                className="user"
                type="text"
                name="username"
                id="inputUsername"
                placeholder="Usuário"
                required
              />
            </div>
            <div className="input">
              <i className="passwordIcon"></i>
              <input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                name="password"
                id="inputPassword"
                placeholder="Senha"
                required
              />
            </div>
            <input className="enterBtn" type="submit" value="Acessar" />
          </form>

          <Link to="../recover">
            <p>Recuperar Credenciais</p>
          </Link>
        </article>
        <div className="footerLogin">
          <h2>Powered By</h2>
          <img src="../assets/logo_small.png" alt="Logo" />
        </div>
      </div>
    </>
  );
}
