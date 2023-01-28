import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import BList from "../../page/BList";
import Add from "../Add/Add";
import "./Business.css";

function Business() {
  return (
    <section className="business">
      <div className="container">
        <div className="navbar">
          <h1>Business Panel</h1>
          <div className="add-booked">
            <ul>
              <Link to={"/Business/"}>
                <li>List</li>
              </Link>
              <li>
                <Link to={'/Business/add'}>Add</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="body-business">
        <Routes>
          <Route path="/">
            <Route index element={<BList />} />
            <Route path="add" element={<Add />} />
          </Route>
        </Routes>
        </div>
      </div>
    </section>
  );
}

export default Business;
