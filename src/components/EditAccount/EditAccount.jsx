import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "../Account/Account.css";
import "./EditAccount.css";

function EditAccount({ edit, setEdit, setUpdate, setImage }) {
  const [file, setFile] = useState("");
  const [img, setImg] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [flag, setFlag] = useState(false);
  const pic = useRef();

  const { role } = useAuth();

  useEffect(() => {
    file && setImg(URL.createObjectURL(file));
  }, [file]);

  function updateHandling() {
    setFlag(false);
    if (pincode) {
      if (pincode.length < 6) {
        setFlag(true);
        return;
      }
    }
    const List = [];
    let t = {};
    username && List.push({ name: username });
    phone && List.push({ phone });
    address && List.push({ address });
    pincode && List.push({ pincode });
    file && setImage(file);
    if (List[0]) {
      List.map((e) => {
        t = { ...t, ...e };
      });
      setUpdate([t]);
    }

    setAddress("");
    setUsername("");
    setFile("");
    setPincode("");
    setPhone("");
    setImg("");
    console.log(t);
  }

  return (
    <section className={`editAccount ${edit}`}>
      <i className="fa-solid fa-xmark" onClick={() => setEdit("scale")}></i>
      <div className="card">
        {flag && <h3 className="err">pincode is not right</h3>}
        <div className="profile-pic">
          <img
            src={img ? img : "./img/default_profile.png"}
            alt="profile_pic"
          />
          <div className="edit-pic">
            <label>Profile : </label>
            <input
              ref={pic}
              type="file"
              id="file"
              accept="image/png , image/jpeg"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="edit-username-div">
            <input
              placeholder="Username"
              type="text"
              className="edit-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="edit-phone-div">
            <input
              placeholder="Phone"
              type="number"
              className="edit-phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {role === "Business" && (
            <div className="edit-textarea-div">
              <textarea
                className="edit-textarea"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          )}
          {role === "Business" && (
            <div className="edit-pincode-div">
              <input
                placeholder="Pincode"
                type="number"
                className="edit-phone"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
          )}
          <button onClick={updateHandling}>Update</button>
        </div>
      </div>
    </section>
  );
}

export default EditAccount;
