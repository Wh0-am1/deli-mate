import React, { useEffect, useState } from "react";
import FoodList from "../FoodList/FoodList";
import "./Lists.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

function Lists() {
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);

  const getData = async () => {
    const queryResult = await getDocs(collection(db, "foodlistings"));
    console.log(queryResult);
  };

  return (
    <section className="main-body">
      <div className="contain-body">
        <FoodList />
        <FoodList />
        <FoodList />
        <FoodList />
        <FoodList />
      </div>

      {/* {data.map((elt) => (
        <p>{elt.data.Name}</p>
      ))} */}
    </section>
  );
}

export default Lists;
