import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { deleteData, getDataId, updateData } from "../../dataManagement";
import "./Report.css";

function Report({ sid, uid, time, msg, did }) {
  const [uName, setUname] = useState("");
  const [sName, setSname] = useState("");

  useEffect(() => {
    console.log(time);
    // const date =
    // console.log(date);
    function test() {}
    const getUname = async () => {
      const dt = await getDataId("users", uid);
      setUname(dt.name);
    };
    const getSname = async () => {
      const dt = await getDataId("users", sid);
      setSname(dt.name);
    };

    getUname();
    getSname();
  }, []);

  function Update() {
    updateData("users", sid, {
      rBusiness: "Normal",
    });
  }

  const [heightW, setHieghtW] = useState("height");
  const [heightA, setHieghtA] = useState("height");
  return (
    <section className="Report-list">
      <div className="container">
        <div className="report-body">
          <div className="heading">
            <h1>{sName}</h1>
            <i>{uName}</i>
          </div>
          <div className="date">
            <p>01/02/2023 12:10pm</p>
          </div>
          <p className="msg">{msg}</p>
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
            <p>Are you sure to remove this business account ?</p>
            <i
              className="fa-solid fa-check"
              onClick={() => {
                Update();
                deleteData("report", did);
              }}
            ></i>
            <i
              className="fa-solid fa-xmark"
              onClick={() => {
                deleteData("report", did);
              }}
            ></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Report;
