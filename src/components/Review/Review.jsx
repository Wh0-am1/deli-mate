import React, { useState } from "react";
import { useEffect } from "react";
import { getDataId } from "../../dataManagement";
import "./Review.css";

function Review({ msg, id, uid, date, rate }) {
  const [name, setName] = useState("");

  const time = date.slice(0, 15);

  const getName = async (id) => {
    const dt = await getDataId("users", id);
    dt && setName(dt.name);
  };

  useEffect(() => {
    getName(uid);
  }, []);
  return (
    <section className="review">
      <div className="container">
        <div className="profile">
          <div className="img-outline">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/deli-mate-21d62.appspot.com/o/1676397239564default_profile.png?alt=media&token=43a676ee-17f4-4363-8104-8777b03eb9b9"
              alt="profile"
            />
          </div>
          <label>{name}</label>
        </div>
        <div className="rating">
          <label>Rating : {rate}</label>
        </div>
        <div className="date-time">
          <p>Reviewed on {time}</p>
        </div>
        <div className="review-msg">
          <p>{msg}</p>
        </div>
      </div>
    </section>
  );
}

export default Review;
