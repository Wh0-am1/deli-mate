import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Booking from "../components/Booking/Booking";
import Review from "../components/Review/Review";
import SelfReview from "../components/SelfReview/SelfReview";
import { getDataId } from "../dataManagement";

let height;

function Order() {
  const { id } = useParams();
  const navigate = useNavigate();

  const getName = async (id) => {
    const dt = await getDataId("users", id);
    dt && setName(dt.name);
  };

  const getData = async (id) => {
    const dt = await getDataId("Foodlistings", id);
    if (dt === null) {
      navigate("*");
    }
    dt && setData(dt);
    dt && getName(dt.user_Id);
  };

  useEffect(() => {
    try {
      getData(id);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const [repClick, setRipClick] = useState(false);
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  repClick ? (height = "bg-height") : (height = "null");
  return (
    <section className={`order ${height}`}>
      <div className="Booking">
        <Booking
          setRepClick={setRipClick}
          repClick={repClick}
          price={data.price}
          qty={data.qty}
          type={data.type}
          sid={data.user_Id}
          nPrice={data.nPrice}
          name={name}
        />
      </div>
      <div className="reviews">
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
      <div className="reviewing">
        <SelfReview sid={data.user_Id} />
      </div>
    </section>
  );
}

export default Order;
