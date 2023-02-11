import React from "react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { dataEntry } from "../../dataManagement";
import "./Add.css";

function Add() {
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [nPrice, setNprice] = useState("");
  const [type, setType] = useState("");
  const { currentUser } = useAuth();
  const [go, setGo] = useState("no-go");
  function launch_toast() {
    setGo("go");
    setTimeout(function () {
      setGo("no-go");
    }, 3000);
  }

  const submitHandling = async (e) => {
    e.preventDefault();
    const data = { price, qty, nPrice, type };
    try {
      await dataEntry(data, "Foodlistings", currentUser.uid);
      launch_toast();
    } catch (e) {
      console.log(e);
    }
    setNprice("");
    setPrice("");
    setQty("");
    setType("");
  };
  return (
    <section className="add">
      <div className={`success ${go}`} onClick={() => setGo("no-go")}>
        <div className="icon">
          <i className="fa-regular fa-circle-check"></i>
        </div>
        <div className="msg">
          <p>submit successfully...</p>
        </div>
      </div>
      <form onSubmit={submitHandling}>
        <div className="container">
          <div className="add-body">
            <div className="heading">
              <h1>Add Details</h1>
            </div>
            <div className="qty">
              <label>Quantity : </label>
              <input
                type="number"
                required
                onChange={(e) => setQty(e.target.value)}
                value={qty}
              />
            </div>
            <div className="price">
              <label>Old Price : </label>
              <input
                type="number"
                required
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>
            <div className="price">
              <label>New Price : </label>
              <input
                type="number"
                required
                onChange={(e) => setNprice(e.target.value)}
                value={nPrice}
              />
            </div>
            <div className="type">
              <span>Type : </span>
              <select onChange={(e) => setType(e.target.value)} value={type}>
                <option value="">--Type--</option>
                <option value="veg">veg</option>
                <option value="non-veg">non-veg</option>
              </select>
            </div>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Add;
