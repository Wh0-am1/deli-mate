import React, { useEffect, useState } from "react";
import OrderHistory from "../OrderHistory/OrderHistory";
import "./Account.css";

let flag = true;
function Account() {
  const [move, setMove] = useState("order-width-move");
  const [scale, setScale] = useState("scale");
  const [shade, setShade] = useState(false);
  const [block, setBlock] = useState(false);
  useEffect(() => {
    setScale("null");
  }, []);
  return (
    <section className="account">
      {shade && <div className="shade" onClick={() => setShade(!shade)}></div>}
      {shade && (
        <div className={`div-field`}>
          <i className="fa-solid fa-comment-dots exclamation"></i>
          <div className="field">
            <textarea
              className="textarea-report"
              placeholder="write your feedback"
            ></textarea>
          </div>
          <button className="report-submit">submit</button>
        </div>
      )}
      <div className="ac-container">
        <div className="feedback-dot" onClick={() => setBlock(!block)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {block && (
          <div
            className="feedback-btn"
            onClick={() => {
              setShade(!shade);
              setBlock(!block);
            }}
          >
            Feedback
          </div>
        )}
        <div className="heading">
          <h1 className="heading">Deli-Mate</h1>
          <p>LET'S START SAVING FOOD.</p>
        </div>
        <div className={`container ${scale}`}>
          <div className="card">
            <div className="profile-pic">
              <img src="./img/default_profile.png" alt="profile_pic" />
            </div>
            <h1>Name</h1>
            <p>
              <label>Phone :</label> 994645434
            </p>
            <p>
              <label>Email :</label> email@gmail.com
            </p>
            <p>
              <label>Account :</label> Normal
            </p>
            <p className="status">
              <label>Status :</label> Pending....
            </p>
            <p className="logout">
              <label>
                Logout <i className="fa-solid fa-right-from-bracket"></i>
              </label>
            </p>
            <label
              className="orders"
              onClick={() => {
                flag = !flag;
                flag ? setMove("order-width-move") : setMove("width");
              }}
            >
              Orders <i> {`>`} </i>
            </label>
          </div>
          <div className={`order-details ${move}`}>
            <OrderHistory />
            <OrderHistory />
            <OrderHistory />
            <OrderHistory />
            <OrderHistory />
            <OrderHistory />
            <OrderHistory />
            <OrderHistory />
            <OrderHistory />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
