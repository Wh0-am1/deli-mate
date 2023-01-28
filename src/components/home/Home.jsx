import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <section className="start">
      <div className="container">
        <div className="head">
          <h3>Deli-Mate</h3>
        </div>
        <div className="body">
          <h1>LET'S START SAVING FOOD.</h1>
          <div className="button">
            <Link to={"/login"}>
              <button className="btn">
                <span>Login</span>
              </button>
            </Link>
            <Link to={"/Create"}>
              <button className="btn">
                <span>Create</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
