import "../../styles/main.css";
import "../../styles/login.css";
import "../../styles/icons.css";

import { useState } from "react";

interface formDataModel {
  username: string;
  password: string;
}

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const Validate = () => {
    const condition =
      username === "admin" && password === "admin" ? true : false;
    if (!condition) event.preventDefault();
  };

  return (
    <>
      <article id="loginBox">
        <img src="../assets/logo_square.png" alt="logo" />
        <form action="../headerGreetings/" method="get" onSubmit={Validate}>
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

        <a href="../recover">
          <p>Recuperar Credenciais</p>
        </a>
      </article>
      <div className="footerLogin">
        <h2>Powered By</h2>
        <img src="../assets/logo_small.png" alt="Logo" />
      </div>
    </>
  );
}
