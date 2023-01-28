import React from "react";
import "./Review.css";

function Review() {
  return (
    <section className="review">
      <div className="container">
        <div className="profile">
          <div className="img-outline">
            <img src="./img/default_profile.png" alt="profile"/>
          </div>
          <label>Name</label>
        </div>
        <div className="rating">
            <label>Rating : 5</label>
        </div>
        <div className="date-time">
            <p>Reviewed on 12 January 2023</p>
        </div>
        <div className="review-msg">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati error, nihil dolorum numquam praesentium excepturi deleniti quasi, nostrum quia laborum dolorem placeat ex ullam aliquid delectus
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero modi, beatae, nulla neque, quasi minus veritatis amet tempore eligendi iste quidem repudiandae! Fugiat minus eum aspernatur commodi mollitia in dicta.
            </p>
        </div>
      </div>
    </section>
  );
}

export default Review;
