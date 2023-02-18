import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { dataEntry } from "../../dataManagement";
import "./Add.css";

function Add() {
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [nPrice, setNprice] = useState("");
  const [type, setType] = useState("");
  const { currentUser } = useAuth();

  const submitHandling = async (e) => {
    e.preventDefault();
    const data = { price, qty, nPrice, type, flag: true };
    try {
      dataEntry(data, "Foodlistings", currentUser.uid);
      toast.success("added successfully");
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
      <ToastContainer theme="colored" autoClose="3000" />
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
            <button
              className="btn"
              onClick={() => toast.success("added successfully")}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Add;
