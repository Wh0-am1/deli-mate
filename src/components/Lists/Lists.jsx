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
    setData(queryResult.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
  };

  return (
    <section className="main-body">
      {/* <FoodList />
      <FoodList />
      <FoodList />
      <FoodList />
      <FoodList /> */}
      {data.map((elt) => (
        <p>{elt.data.Name}</p>
      ))}
    </section>
  );
}

export default Lists;
