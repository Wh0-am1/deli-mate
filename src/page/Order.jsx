import { collection, onSnapshot } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Booking from "../components/Booking/Booking";
import Review from "../components/Review/Review";
import SelfReview from "../components/SelfReview/SelfReview";
import { getData, getDataId } from "../dataManagement";
import { db } from "../firebase-config";

let height;

function Order() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  const getName = async (id) => {
    const dt = await getDataId("users", id);
    dt && setName(dt.name);
    dt && setImg(dt.pic);
  };

  const getList = async (id) => {
    const dt = await getDataId("Foodlistings", id);
    if (dt === null) {
      navigate("*");
    }
    dt && setData(dt);
    dt && getName(dt.user_Id);
  };

  useEffect(() => {
    try {
      getList(id);
    } catch (e) {
      console.log(e);
    }
    const unsubscribe = onSnapshot(
      collection(db, "reviews"),
      (snapshot) => {
        const List = [];
        snapshot.docs.forEach((doc) => {
          List.push({ uid: doc.data().user_Id, id: doc.id, ...doc.data() });
          setReviews(List);
        });
      },
      (error) => {
        console.log(error);
      }
    );

    return unsubscribe;
  }, []);

  const [repClick, setRipClick] = useState(false);
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
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
          pic={img}
        />
      </div>
      <div className="reviews">
        {reviews.map((elt) => {
          return (
            <Review
              msg={elt.msg}
              id={elt.id}
              uid={elt.user_Id}
              date={elt.time}
              rate={elt.rate}
              key={elt.id}
            />
          );
        })}
      </div>
      <div className="reviewing">
        <SelfReview sid={data.user_Id} />
      </div>
    </section>
  );
}

export default Order;
