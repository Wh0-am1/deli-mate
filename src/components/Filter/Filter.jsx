import React from "react";
import SearchForFilter from "../SearchForFilter/SearchForFilter";
import "./Filter.css";

function Filter({ width,setWidth }) {
  return (
    <section className={`Filter ${width}`}>
      <h1 className="cross" onClick={setWidth}><i className="fa-solid fa-xmark"></i></h1>
      <div className="container">
        <SearchForFilter span="Search By Pincode : " placeholder="pincode" />
        <SearchForFilter span="Max Price : " placeholder="price" />
        <div className="select">
         <div className="rating options">
         <span>Rating</span>
          <select >
            <option value="">--rating--</option>
            <option value="2">2 & above</option>
            <option value="3">3 & above</option>
            <option value="4">4 & above</option>
          </select>
         </div>
          <div className="type options">
          <span>Type</span>
          <select >
            <option value="">--Type--</option>
            <option value="veg">veg</option>
            <option value="non-veg">non-veg</option>
          </select>
          </div>
         <div className="sorting options">
         <span>Sorting</span>
          <select defaultValue={`--Sorting--`}>
            <option value="">--Sorting--</option>
            <option value="Low">Low to High</option>
            <option value="High">High to Low</option>
          </select>
         </div>
        </div>
        <button>ok</button>
      </div>
    </section>
  );
}

export default Filter;
