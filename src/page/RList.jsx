import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Request from "../components/Request/Request";
import "../components/Request/Request.css";
import { db } from "../firebase-config";
function RList() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(true);
    const q = query(
      collection(db, "users"),
      where("rBusiness", "==", "pending")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const List = [];
      querySnapshot.forEach((doc) => {
        List.push({ id: doc.id, ...doc.data() });
        setData(List);
        setLoad(false);
      });
    });

    return unsubscribe;
  }, []);
  return (
    <section className="RList">
      <div className="container">
        {load && (
          <div className="load">
            <h1>No Data Found</h1>
          </div>
        )}
        {data.map((elt) => (
          <Request
            lid={elt.licence}
            ph={elt.phone}
            ads={elt.address}
            pc={elt.pincode}
            name={elt.name}
            id={elt.id}
            key={elt.id}
          />
        ))}
      </div>
    </section>
  );
}

export default RList;
