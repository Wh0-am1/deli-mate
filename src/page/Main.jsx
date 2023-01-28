import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Hedear from "../components/Main/Header";
import Filter from "../components/Filter/Filter";
import Lists from "../components/Lists/Lists";
import '../components/Filter/Filter.css'


let flag;

function Main() {

  useEffect(()=>{
    flag = true;
  },[]);
  

  const widthHandling = () => {
    if (flag) {
      setWidth("full");
      flag = !flag;
    } else {
      setWidth("zero");
      flag = !flag;
    }
  };

  const [width, setWidth] = useState("zero");

  return (
    <section className="Main">
      <Hedear setWidth={widthHandling} />
      <div className="list-body">
        <div className="filter">
          <Filter width={width} setWidth={widthHandling} />
        </div>
        <Routes>
            <Route path="/" element={<Lists />} />
        </Routes>
      </div>
    </section>
  );
}

export default Main;
