import { collection, onSnapshot, query, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BookedList from "../components/BookedList/BookedList";
import "../components/BookedList/BookedList.css";
import { db } from "../firebase-config";
function BList() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "orders"), where("status", "==", "booked"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const List = [];
        snapshot.docs.forEach((doc) => {
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
        <BookedList
          bookId={elt.bookId}
          qty={elt.qty}
          uid={elt.user_Id}
          id={elt.id}
          key={elt.id}
        />
      ))}
    </section>
  );
}

export default BList;
