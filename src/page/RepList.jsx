import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Report from "../components/Report/Report";
import "../components/Report/Report.css";
import { db } from "../firebase-config";

function RepList() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
    const unsubscribe = onSnapshot(
      collection(db, "report"),
      (snapshot) => {
        setLoad(true);
        const List = [];
        snapshot.docs.forEach((doc) => {
          console.log(doc.id);
          List.push({
            did: doc.id,
            uid: doc.data().user_Id,
            id: doc.id,
            ...doc.data(),
          });
          setLoad(false);
        });
        setData(List);
      },
      (error) => {
        console.log(error);
      }
    );

    return unsubscribe;
  }, []);
  return (
    <section className="RepList">
      {load && (
        <div className="load">
          <h1>No Data Found</h1>
        </div>
      )}
      {data.map((elt) => {
        return (
          <Report
            sid={elt.sid}
            uid={elt.user_Id}
            time={elt.time}
            msg={elt.report}
            did={elt.did}
          />
        );
      })}
    </section>
  );
}

export default RepList;
