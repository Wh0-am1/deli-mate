import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Header.css";

function Hedear(props) {
  const { role } = useAuth();

  return (
    <section className="Header">
      <div className="container">
        <div className="header">
          <div className="search">
            <input type="text" placeholder="search" />
            <i className="icon fa-sharp fa-solid fa-magnifying-glass" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to={"/Account"}>Account</Link>
              </li>
              <li onClick={props.setWidth}>Filter</li>
              {role === true && (
                <li>
                  <Link to={"/Business"}>Business</Link>
                </li>
              )}
              {role === "admin" && (
                <li>
                  <Link to={"/Admin"}>Admin</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hedear;
