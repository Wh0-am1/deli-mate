import React from "react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { dataEntry } from "../../dataManagement";
import "./SelfReview.css";
function SelfReview({ sid }) {
  const [rate, setRate] = useState("");
  const [msg, setMsg] = useState("");

  const { currentUser } = useAuth();

  function reviewHandling() {
    if (rate === "" || msg === "") console.log("nothing");
    else {
      dataEntry({ msg, rate, sid }, "reviews", currentUser.uid);
      setMsg("");
      setRate("");
    }
  }
  return (
    <section className="self-review">
      <div className="container">
        <div className="rate">
          <input
            type="radio"
            id="star5"
            name="rate"
            value="5"
            onClick={() => setRate(5)}
          />
          <label htmlFor="star5" title="text">
            5 stars
          </label>
          <input
            type="radio"
            id="star4"
            name="rate"
            value="4"
            onClick={() => setRate(4)}
          />
          <label htmlFor="star4" title="text">
            4 stars
          </label>
          <input
            type="radio"
            id="star3"
            name="rate"
            value="3"
            onClick={() => setRate(3)}
          />
          <label htmlFor="star3" title="text">
            3 stars
          </label>
          <input
            type="radio"
            id="star2"
            name="rate"
            value="2"
            onClick={() => setRate(2)}
          />
          <label htmlFor="star2" title="text">
            2 stars
          </label>
          <input
            type="radio"
            id="star1"
            name="rate"
            value="1"
            onClick={() => setRate(1)}
          />
          <label htmlFor="star1" title="text">
            1 star
          </label>
        </div>
        <textarea
          placeholder="Enter your Review"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <h1 onClick={reviewHandling}>Submit</h1>
      </div>
    </section>
  );
}

export default SelfReview;
