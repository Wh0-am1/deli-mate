import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Hedear(props) {
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
              <li><Link to={"/Business"}>Business</Link></li>
              <li><Link to={"/Admin"}>Admin</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hedear;
