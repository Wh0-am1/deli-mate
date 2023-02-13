import React from "react";
import "./Request.css";

function Request({ lid, ph, ads, pc, name }) {
  console.log(lid, ph, ads, pc, name);
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
            <select>
              <option value="">requested</option>
              <option value="verified">verified</option>
              <option value="rejected">rejected</option>
            </select>
          </div>
          <button>submit</button>
        </div>
      </div>
    </section>
  );
}

export default Request;
