import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Feedback from "../components/Feedback/Feedback";
import "../components/Feedback/Feedback.css";
import { db } from "../firebase-config";

function FList() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
    const unsubscribe = onSnapshot(
      collection(db, "feedback"),
      (snapshot) => {
        setLoad(true);
        const List = [];
        snapshot.docs.forEach((doc) => {
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
    <section className="FList">
      {load && (
        <div className="load">
          <h1>No Data Found</h1>
        </div>
      )}
      {data.map((elt) => {
        return (
          <Feedback
            uid={elt.user_Id}
            time={elt.time}
            msg={elt.feedback}
            did={elt.did}
          />
        );
      })}
    </section>
  );
}

export default FList;
