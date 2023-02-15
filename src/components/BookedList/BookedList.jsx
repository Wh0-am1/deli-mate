import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getDataId } from "../../dataManagement";
import "./BookedList.css";

function BookedList({ bookId, qty, uid }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [bid, setBid] = useState();

  function submitHandling(e) {
    e.preventDefault();
    console.log(bid === String(bookId));
  }

  useEffect(() => {
    const getName = async (id) => {
      const dt = await getDataId("users", id);
      dt && setName(dt.name);
      dt && setNumber(dt.phone);
    };

    getName(uid);
  }, []);
  return (
    <section className="booked-list">
      <div className="container">
        <div className="body-list">
          <h1>{name}</h1>
          <div className="qty flex">
            <label>Quantity : </label>
            <p>{qty}</p>
          </div>
          <div className="phone flex">
            <label>Phone : </label>
            <p>{number}</p>
          </div>
          <form onSubmit={submitHandling}>
            <div className="gNumber">
              <input
                type="number"
                required
                onChange={(e) => setBid(e.target.value)}
              />
              <div className="btn">
                <button>
                  <i className="fa-solid fa-check"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookedList;
