import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import FoodList from "../FoodList/FoodList";
import "./Lists.css";

function Lists() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
    const unsubscribe = onSnapshot(
      collection(db, "Foodlistings"),
      (snapshot) => {
        const List = [];
        snapshot.docs.forEach((doc) => {
          /*getDataId("users", doc.data().user_Id)
            .then((res) => {
              List.push({ name: res.name, id: doc.id, ...doc.data() });
              setLoad(false);
              setData(List);
            })
            .catch((e) => console.log(e));*/
          List.push({ uid: doc.data().user_Id, id: doc.id, ...doc.data() });
          setLoad(false);
          setData(List);
        });
      },
      (error) => {
        console.log(error);
      }
    );

    return unsubscribe;
  }, []);

  return (
    <section className="main-body">
      <div className="contain-body">
        {load && (
          <div className="load">
            <h1>No Data Found</h1>
          </div>
        )}
        {data.map((elt) => {
          // console.log(elt);
          return (
            <FoodList
              uid={elt.uid}
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
