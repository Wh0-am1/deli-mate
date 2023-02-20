import React, { useEffect, useState } from "react";
import "./FoodList.css";
import { useNavigate } from "react-router-dom";
import { getDataId } from "../../dataManagement";

function FoodList({ uid, price, qty, type, id }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [rate, setRate] = useState("");

  useEffect(() => {
    setMoveSide("side");
    setOpacity("null");
    setHeight("height-px");
    setTimeout(() => {
      setHeight("height-pc");
    }, 850);

    const getName = async () => {
      const dt = await getDataId("users", uid);
      setImg(dt.pic);
      setName(dt.name);
      setRate(dt.rate);
    };

    getName();

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
      <div
        className={`container ${moveSide} ${opacity} ${height}`}
        onClick={() => {
          navigate(`/Order/${id}`);
        }}
      >
        <div className="img-bs">
          <img src={img ? img : "./img/default_profile.png"} alt="img" />
        </div>
        <div className="description">
          <h1>{name}</h1>
          <div className="details">
            <h1>Price : {`${price}/-`}</h1>
            <p className="qty">quantity : {`${qty}`}</p>
            <p> Type : {`${type}`}</p>
            <p id="rating">rating : {Number(rate).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodList;
