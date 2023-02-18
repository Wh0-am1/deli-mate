import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { dateTime } from "../../dataManagement";
import "./AddHistory.css";

function AddHistory({ time, qty, price, type }) {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(dateTime(time));
  }, []);
  return (
    <section className="addHistory">
      <div className="container">
        <div className="flex time">
          <label>Time : </label>
          <p>{date}</p>
        </div>
        <div className="flex price">
          <label>Price : </label>
          <p>{`${price}/-`}</p>
        </div>
        <div className="flex qty">
          <label>Quantitiy : </label>
          <p>{qty}</p>
        </div>
        <div className="flex type">
          <label>Type : </label>
          <p>{type}</p>
        </div>
        {/* <div className="flex after">
          <label> After Qunatity : </label>
          <p>web 23/34/1002 10:43 pm</p>
        </div> */}
      </div>
    </section>
  );
}

export default AddHistory;
