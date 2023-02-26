import React, { useEffect, useState } from "react";
import "./FoodList.css";
import { useNavigate } from "react-router-dom";
import { getDataId } from "../../dataManagement";
import { useAuth } from "../../contexts/AuthContext";

function FoodList({ uid, price, qty, type, id, eFlag }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [rate, setRate] = useState("");

  const { currentUser } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setOpacity("null");
    }, 500);

    const getName = async () => {
      const dt = await getDataId("users", uid);
      setImg(dt.pic);
      setName(dt.name);
      setRate(dt.rate);
    };

    getName();

    return () => {
      setOpacity("opacity");
    };
  }, []);

  const [opacity, setOpacity] = useState("opacity");
  const [width, setWidth] = useState("width-once-0");
  return (
    <section className="FoodList">
      <div className={`container  ${opacity} `}>
        {currentUser.uid === uid && eFlag && (
          <i
            className="fa-solid fa-pen penTool"
            onClick={() => setWidth("width-once-100")}
          ></i>
        )}
        <div className={`edit-once ${width}`}>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setWidth("width-once-0")}
          ></i>
          <div className="once-container">
            <div>
              <label>Price : </label>
              <input type="number" />
            </div>
            <div>
              <label>Quantitiy : </label>
              <input type="number" />
            </div>
            <div>
              <label>Type : </label>
              <select>
                <option value="">select</option>
                <option value="veg">veg</option>
                <option value="non-veg">non-veg</option>
              </select>
            </div>
            <div>
              <button>Update</button>
            </div>
          </div>
        </div>
        <div className="img-bs">
          <img src={img ? img : "./img/default_profile.png"} alt="img" />
        </div>
        <div
          className="description"
          onClick={() => {
            navigate(`/Order/${id}`);
          }}
        >
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
