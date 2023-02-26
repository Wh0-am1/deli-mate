import { where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { dataWhere } from "../../dataManagement";
import AddHistory from "../AddHistory/AddHistory";
import "./History.css";
import ReactLoading from "react-loading";

function History() {
  const [history, setHistory] = useState([]);
  const { currentUser } = useAuth();
  const [load, setLoad] = useState(true);
  const [found, setFound] = useState(false);
  useEffect(() => {
    const historyData = async () => {
      const List = await dataWhere("Foodlistings", [
        where("user_Id", "==", currentUser.uid),
      ]);
      setLoad(false);
      setHistory(List);
      !List[0] && setFound(true);
    };

    historyData();
  }, []);
  return (
    <section className="history">
      {found && (
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
