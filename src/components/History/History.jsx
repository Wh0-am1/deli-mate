import { where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { dataWhere } from "../../dataManagement";
import AddHistory from "../AddHistory/AddHistory";
import "./History.css";

function History() {
  const [history, setHistory] = useState([]);
  const { currentUser } = useAuth();
  useEffect(() => {
    const historyData = async () => {
      const List = await dataWhere("Foodlistings", [
        where("user_Id", "==", currentUser.uid),
      ]);
      setHistory(List);
    };

    historyData();
  }, []);
  return (
    <section className="history">
      <div className="container">
        {history.map((elt) => (
          <AddHistory
            price={elt.price}
            time={elt.time}
            qty={elt.qty}
            type={elt.type}
            key={elt.id}
          />
        ))}
      </div>
    </section>
  );
}

export default History;
