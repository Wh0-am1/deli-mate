import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../../firebase-config";
import SearchForFilter from "../SearchForFilter/SearchForFilter";
import "./Filter.css";

function Filter({ width, setWidth, setFilter, setId }) {
  const [pincode, setPincode] = useState("");
  const [max, setMax] = useState("");
  const [rating, setRating] = useState([]);
  const [type, setType] = useState("");
  const [sorting, setSorting] = useState("");

  async function submitHandling() {
    const q = query(collection(db, "users"), where("pincode", "==", pincode));
    setRating(q);

    const querySnapshot = await getDocs(rating);
    const List = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      List.push(doc.id);
      console.log(List);
      setId(List);
    });
    setFilter({ max, rating, type, sorting });
  }

  return (
    <section className={`Filter ${width}`}>
      <h1 className="cross" onClick={setWidth}>
        <i className="fa-solid fa-xmark"></i>
      </h1>
      <div className="container">
        <SearchForFilter
          span="Search By Pincode : "
          placeholder="pincode"
          value={pincode}
          change={setPincode}
        />
        <SearchForFilter
          span="Max Price : "
          placeholder="price"
          value={max}
          change={setMax}
        />
        <div className="select">
          <div className="rating options">
            <span>Rating</span>
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="">--rating--</option>
              <option value="2">2 & above</option>
              <option value="3">3 & above</option>
              <option value="4">4 & above</option>
            </select>
          </div>
          <div className="type options">
            <span>Type</span>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">--Type--</option>
              <option value="veg">veg</option>
              <option value="non-veg">non-veg</option>
            </select>
          </div>
          <div className="sorting options">
            <span>Sorting</span>
            <select
              defaultValue={`--Sorting--`}
              value={sorting}
              onChange={(e) => setSorting(e.target.value)}
            >
              <option value="">--Sorting--</option>
              <option value="Low">Low to High</option>
              <option value="High">High to Low</option>
            </select>
          </div>
        </div>
        <button onClick={submitHandling}>ok</button>
      </div>
    </section>
  );
}

export default Filter;
