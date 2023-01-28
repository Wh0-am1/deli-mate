import React, { useEffect, useState } from "react";
import "./FoodList.css";
import { useNavigate } from "react-router-dom";

function FoodList() {
  const navigate = useNavigate();

  useEffect(() => {
    setMoveSide("side");
    setOpacity("null");
    setHeight("height-px");
    setTimeout(() => {
      setHeight("height-pc");
    }, 850);

    return () => {
      setMoveSide("null");
      setOpacity("opacity");
    };
  }, []);

  const [moveSide, setMoveSide] = useState("null");
  const [opacity, setOpacity] = useState("opacity");
  const [height, setHeight] = useState("null");
  return (
    <section className="FoodList">
      <div className={`container ${moveSide} ${opacity} ${height}`} onClick={() => navigate("/Order")}>
        <div className="description" >
          <h1>Deli-Mate</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis laboriosam voluptatibus, beatae praesentium, a voluptate
            aperiam magni dicta vel libero odit. Ab rerum explicabo obcaecati
            dolorem et eaque natus modi.
          </p>
        </div>
        <div className="details">
          <h1>Price : 400/-</h1>
          <p className="qty">quantity : 10</p>
          <p> Type : veg</p>
          <p id="rating">rating : 5.0</p>
        </div>
      </div>
    </section>
  );
}

export default FoodList;
