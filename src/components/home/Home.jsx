import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { ToastContainer, toast } from "react-toastify";

function Home({ log, setLogged }) {
  useEffect(() => {
    log && toast.error("Logged Out");
    console.log(log);

    return setLogged(false);
  }, []);
  return (
    <section className="start">
      <ToastContainer theme="colored" autoClose="3000" position="bottom-left" />
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
