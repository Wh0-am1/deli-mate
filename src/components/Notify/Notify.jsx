import React, { useState } from "react";
import { useRef } from "react";
import "./Notify.css";

function Notify() {
  const [size, setSize] = useState("msg-low");
  const close = useRef();

  function closeHandling() {
    size === "msg-low" ? setSize("msg-high") : setSize("msg-low");
    setTimeout(() => {
      close.current.style.display = "none";
    }, 1000);
  }
  return (
    <section ref={close} className="notify">
      <div className={`warn-notify ${size}`}>
        <i className="fa-sharp fa-solid fa-xmark" onClick={closeHandling}></i>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          omnis nam obcaecati ad laudantium. lore{" "}
        </p>
        <div className="reason">
          <textarea></textarea>
          <button>sent</button>
        </div>
      </div>
      <i
        className="fa-solid fa-comment-dots"
        onClick={() => {
          size === "msg-low" ? setSize("msg-high") : setSize("msg-low");
        }}
      ></i>
    </section>
  );
}

export default Notify;
