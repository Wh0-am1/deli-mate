import React from "react";
import { useState } from "react";
import "./Report.css";

function Report() {
  const [heightW, setHieghtW] = useState("height");
  const [heightA, setHieghtA] = useState("height");
  return (
    <section className="Report-list">
      <div className="container">
        <div className="report-body">
          <div className="heading">
            <h1>SourceName</h1>
            <i>Username</i>
          </div>
          <div className="date">
            <p>01/02/2023 12:10pm</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur voluptatem dolore soluta vitae, facere amet? Doloribus,
            vero nostrum magnam officia exercitationem voluptatem sequi sit. A
            laudantium consequatur corrupti quis tempore.
          </p>
          <div className="btn">
            <button
              className="warning"
              onClick={() => {
                heightW === "height"
                  ? setHieghtW("null")
                  : setHieghtW("height");
                setHieghtA("height");
              }}
            >
              Warning
            </button>
            <button
              className="action"
              onClick={() => {
                heightA === "height"
                  ? setHieghtA("null")
                  : setHieghtA("height");
                setHieghtW("height");
              }}
            >
              Action
            </button>
          </div>
          <div className={`msg-area ${heightW}`}>
            <textarea className="warning"></textarea>
            <button>sent</button>
          </div>
          <div className={`action-div ${heightA}`}>
            <p>Are you sure to remove his business account ?</p>
            <i className="fa-solid fa-check"></i>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Report;
