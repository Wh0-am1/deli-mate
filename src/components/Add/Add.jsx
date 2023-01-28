import React from "react";
import "./Add.css";

function Add() {
  return (
    <section className="add">
      <div className="container">
        <div className="add-body">
          <div className="heading">
            <h1>Add Details</h1>
          </div>
          <div className="qty">
            <label>Quantity : </label>
            <input type="number" />
          </div>
          <div className="price">
            <label>Old Price : </label>
            <input type="number" />
          </div>
          <div className="price">
            <label>New Price : </label>
            <input type="number" />
          </div>
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
}

export default Add;
