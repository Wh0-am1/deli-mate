import React from "react";
import "./Feedback.css";

function Feedback() {
  return (
    <section className="Feedback">
      <div className="container">
        <div className="feedback-body">
            <h1>username</h1>
            <div className="date">
              <p>01/02/2023 12:10pm</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur voluptatem dolore soluta vitae, facere amet?
              Doloribus, vero nostrum magnam officia exercitationem voluptatem
              sequi sit. A laudantium consequatur corrupti quis tempore.
            </p>
            <div className="replay">
              <textarea
                className="textarea"
                placeholder="sent replay"
              ></textarea>
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
