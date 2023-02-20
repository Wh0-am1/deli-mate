import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import FoodList from "../FoodList/FoodList";
import "./Lists.css";

function Lists({ search, Max, Sort, Type }) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  {
    useEffect(() => {
      setLoad(true);
      const q = query(
        collection(db, "Foodlistings"),
        search,
        where("price", ...Max),
        ...Type,
        ...Sort
      );
      // const q = query(collection(db, "Foodlistings"), where("user_Id", "!=", null));
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const List = [];
          snapshot.docs.forEach((doc) => {
            List.push({ uid: doc.data().user_Id, id: doc.id, ...doc.data() });
            setLoad(false);
          });
          setData(List);
        },
        (error) => {
          console.log(error);
        }
      );
      return unsubscribe;
    }, [search, Max, Type, Sort]);
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
              pic={elt.pic}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Lists;
