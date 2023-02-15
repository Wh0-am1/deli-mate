import React from "react";
import { useState } from "react";
import { updateData } from "../../dataManagement";
import "./Request.css";

function Request({ lid, ph, ads, pc, name, id }) {
  const [data, setData] = useState("");
  function Update() {
    let v;
    data ? (v = "Business") : (v = "Normal");
    updateData("users", id, {
      rBusiness: v,
    });
  }

  return (
    <section className="request">
      <div className="container">
        <div className="request-list">
          <h1>{name}</h1>
          <div className="license-id flex">
            <label>License Id : </label>
            <p>{lid}</p>
          </div>
          <div className="license-id flex">
            <label>Phone : </label>
            <p>{ph}</p>
          </div>
          <div className="address">
            <label>Address :</label>
            <p>{ads}</p>
          </div>
          <div className="pincode flex">
            <label>Pincode : </label>
            <p>{pc}</p>
          </div>
          <div className="mode flex">
            <label>Request : </label>
            <select onChange={(e) => setData(e.target.value)}>
              <option value="">requested</option>
              <option value={true}>verified</option>
              <option value={false}>rejected</option>
            </select>
          </div>
          <button onClick={Update}>submit</button>
        </div>
      </div>
    </section>
  );
}

export default Request;
