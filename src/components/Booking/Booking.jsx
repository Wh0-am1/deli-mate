import React, {useState } from "react";
import "./Booking.css";

const n = [];
const select = (num = 8) => {
  for (let i = 1; i <= num; i++) {
    n.push(i);
  }
  return n;
};
let shadow;
function Booking({ repClick, setRepClick }) {
  const [block, setBlock] = useState(false);
  repClick ? (shadow = "report-bg") : (shadow = "null");
  return (
    <section className={`Booking`}>
      <div
        className={`report-field ${shadow}`}
        onClick={() => setRepClick(block)}
      >
        <div className={`field`}>
        </div>
      </div>
      {repClick && (
        <div className={`div-field`}>
          <i class="fa-solid fa-circle-exclamation exclamation"></i>
          <div className="field">
            <textarea
              className="textarea-report"
              placeholder="write your reason"
            ></textarea>
          </div>
          <button className="report-submit">submit</button>
        </div>
      )}
      <div className="container">
        <div className="report">
          <div className="three-dot" onClick={() => {setBlock(!block)}}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {block && (
            <label
              onClick={() => {
                setBlock(!block);
                setRepClick(block);
              }}
            >
              Report!!
            </label>
          )}
        </div>
        <div className="outline">
          <div className="img-book">
            <img src="./img/img2.jpg" alt="img" />
            <div className="total-qty">
              <span>Package Left!!!</span>
              <h1>8</h1>
            </div>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <div className="booking-qty">
                <span>Quantity</span>
                <select className="qty-select">
                  <option value="">--quantity--</option>
                  {select(8).map((num, index) => (
                    <option value={num} key={index}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <button>Book Now</button>
            </form>
          </div>
          <div className="book-details">
            <div className="head-rate">
              <h1>Deli-Mate</h1>
              <i className="line"></i>
              <div className="rating">
                <h1>5</h1>
                <i className="fa-sharp fa-solid fa-star"></i>
              </div>
            </div>
            <div className="price">
              <p>200/-</p>
              <p className="strike">279/-</p>
            </div>
            <p>10:00 to 10:30</p>
            <div className="map">
              <div className="location-title">
                <h1>Location</h1>
              </div>
              <iframe
                title="google-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15662.154162031573!2d76.07399945!3d11.0731828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1674023125366!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
