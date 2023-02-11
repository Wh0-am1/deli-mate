import React, { useEffect, useState } from "react";
import { getData, getDataId } from "../../dataManagement";
import FoodList from "../FoodList/FoodList";
import "./Lists.css";

function Lists() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const get = async () => {
      setData(await getData("Foodlistings"));
    };
    get();
  }, []);

  const getName = async (id) => {
    const dt = await getDataId("users", id);
    dt && setName(dt.name);
  };

  return (
    <section className="main-body">
      <div className="contain-body">
        {data.map((elt) => {
          getName(elt.user_Id);
          return (
            <FoodList
              name={name}
              price={elt.price}
              qty={elt.qty}
              type={elt.type}
              key={elt.id}
              id={elt.id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Lists;
