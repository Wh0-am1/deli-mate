import React, { useEffect, useState } from "react";
import { getDataId } from "../../dataManagement";
import "./Feedback.css";

function Feedback({ uid, time, msg, did }) {
  const [name, setName] = useState("");

  useEffect(() => {
    const getName = async () => {
      const dt = await getDataId("users", uid);
      setName(dt.name);
      console.log();
    };

    getName();
  }, []);

  return (
    <section className="Feedback">
      <div className="container">
        <div className="feedback-body">
          <h1>{name}</h1>
          <div className="date">
            <p>01/02/2023 12:10pm</p>
          </div>
          <p>{msg}</p>
          <div className="replay">
            <textarea className="textarea" placeholder="sent replay"></textarea>
            <button className="sent">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
