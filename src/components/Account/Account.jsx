import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { dataEntry } from "../../dataManagement";
import { storage } from "../../firebase-config";
import OrderHistory from "../OrderHistory/OrderHistory";
import "./Account.css";

let flag = true;
function Account() {
  const [move, setMove] = useState("order-width-move");
  const [scale, setScale] = useState("scale");
  const [shade, setShade] = useState(false);
  const [block, setBlock] = useState(false);
  const [file, setFile] = useState("");
  const [k, setK] = useState(false);
  const [img, setImg] = useState("");
  const [feedback, setFeedback] = useState("");
  const { currentUser, logout, role } = useAuth();
  useEffect(() => {
    setScale("null");
  }, []);
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      console.log(storageRef);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");

          progress === 100 ? setK(true) : setK(false);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            setImg(downloadURL);
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const handleLogout = async () => {
    try {
      await logout();
      role.current = "";
    } catch (error) {
      console.log(error);
    }
  };

  function feedbacktHandling() {
    if (feedback) {
      dataEntry({ feedback }, "feedback", currentUser.uid);
      setFeedback("");
    } else console.log("nothing");
  }
  return (
    <section className="account">
      {shade && <div className="shade" onClick={() => setShade(!shade)}></div>}
      {shade && (
        <div className={`div-field`}>
          <i className="fa-solid fa-comment-dots exclamation"></i>
          <div className="field">
            <textarea
              className="textarea-report"
              placeholder="write your feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
          </div>
          <button className="report-submit" onClick={feedbacktHandling}>
            submit
          </button>
        </div>
      )}
      <div className="ac-container">
        <div className="feedback-dot" onClick={() => setBlock(!block)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {block && (
          <div
            className="feedback-btn"
            onClick={() => {
              setShade(!shade);
              setBlock(!block);
            }}
          >
            Feedback
          </div>
        )}
        <div className="heading">
          <h1 className="heading">Deli-Mate</h1>
          <p>LET'S START SAVING FOOD.</p>
        </div>
        <div className={`container ${scale}`}>
          <div className="card">
            <div className="profile-pic">
              <img
                src={k ? img : "./img/default_profile.png"}
                alt="profile_pic"
              />
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <h1>Name</h1>
            <p>
              <label>Phone :</label> 994645434
            </p>
            <p>
              <label>Email :</label> {currentUser.email}
            </p>
            <p>
              <label>Account :</label> {role === "pending" ? "Business" : role}
            </p>
            <p className="status">
              <label>Status :</label>{" "}
              {role === "pending" ? "Pending...." : "Verified"}
            </p>
            <p className="logout">
              <label onClick={handleLogout}>
                Logout <i className="fa-solid fa-right-from-bracket"></i>
              </label>
            </p>
            <label
              className="orders"
              onClick={() => {
                flag = !flag;
                flag ? setMove("order-width-move") : setMove("width");
              }}
            >
              Orders <i> {`>`} </i>
            </label>
          </div>
          <div className={`order-details ${move}`}>
            <OrderHistory />
            <OrderHistory />
            <OrderHistory />
            <OrderHistory />
            <OrderHistory />
            <OrderHistory />
            <OrderHistory />
            <OrderHistory />
            <OrderHistory />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
