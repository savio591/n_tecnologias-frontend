import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/breadcrumb.css";
import { ApiContext } from "../../context";

export default function Breadcrumb() {
  const { navigation } = useContext(ApiContext);
  return (
    <>
      <nav className="breadcrumb">
        <ul>
          <li className="home">
            <Link to="./">
              <i className="homeIcon"></i>
            </Link>
          </li>
          {navigation.map((n) => (
            <li className="title">
              <Link to="./">
                <p>{n}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
