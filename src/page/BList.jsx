import { collection, onSnapshot, query, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BookedList from "../components/BookedList/BookedList";
import "../components/BookedList/BookedList.css";
import { db } from "../firebase-config";
import ReactLoading from "react-loading";

function BList() {
  const [order, setOrder] = useState([]);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const q = query(collection(db, "orders"), where("status", "==", "booked"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const List = [];
        snapshot.docs.forEach((doc) => {
          List.push({ uid: doc.data().user_Id, id: doc.id, ...doc.data() });
          setOrder(List);
          setLoad(false);
        });
        !List[0] && setLoad(false);
      },
      (error) => {
        console.log(error);
      }
    );

    return unsubscribe;
  }, []);
  useEffect(() => {
    let List = [];
    if (search) {
      List = order.filter((e) => e.name.search(search) === 0);
      setData(List);
    } else {
      setData(order);
    }
  }, [search, order]);
  return (
    <section className="b-list">
      <div className="search">
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className="icon fa-sharp fa-solid fa-magnifying-glass" />
      </div>
      {!data[0] && !load && (
        <div className="load">
          <h1>No Data Found</h1>
        </div>
      )}
      {load && (
        <div className="react-load">
          <ReactLoading
            type={"spinningBubbles"}
            color={"rgb(63 55 55)"}
            height={"30%"}
            width={"30%"}
          />
        </div>
      )}
      {data.map((elt) => (
        <BookedList
          bookId={elt.bookId}
          qty={elt.qty}
          uid={elt.user_Id}
          id={elt.id}
          key={elt.id}
          price={elt.price}
        />
      ))}
    </section>
  );
}

export default BList;
