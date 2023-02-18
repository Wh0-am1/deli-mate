import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import FoodList from "../FoodList/FoodList";
import "./Lists.css";

function Lists({ search }) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  {
    useEffect(() => {
      setLoad(true);
      console.log(search);
      const q = query(collection(db, "Foodlistings"), search);
      // const q = query(collection(db, "Foodlistings"), where("user_Id", "!=", null));
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          console.log("keri");
          const List = [];
          snapshot.docs.forEach((doc) => {
            List.push({ uid: doc.data().user_Id, id: doc.id, ...doc.data() });
            setLoad(false);
          });
          console.log(List);
          setData(List);
        },
        (error) => {
          console.log(error);
        }
      );
      return unsubscribe;
    }, [search]);
  }

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
