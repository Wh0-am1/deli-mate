import React from "react";
import "./BookedList.css";

function BookedList() {
  return (
    <section className="booked-list">
      <div className="container">
        <div className="body-list">
          <h1>UserName</h1>
          <div className="qty flex">
            <label>Quantity : </label>
            <p>4</p>
          </div>
          <div className="phone flex">
            <label>Phone : </label>
            <p>994688754</p>
          </div>
          <div className="gNumber">
            <input type="number" />
            <div className="btn">
              <button><i className="fa-solid fa-check"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookedList;
