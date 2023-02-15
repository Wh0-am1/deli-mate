import { collection, onSnapshot } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BookedList from "../components/BookedList/BookedList";
import "../components/BookedList/BookedList.css";
import { db } from "../firebase-config";
function BList() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "orders"),
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
          setOrder(List);
        });
      },
      (error) => {
        console.log(error);
      }
    );

    return unsubscribe;
  }, []);
  return (
    <section className="b-list">
      {order.map((elt) => (
        <BookedList bookId={elt.bookId} qty={elt.qty} uid={elt.user_Id} />
      ))}
    </section>
  );
}

export default BList;
