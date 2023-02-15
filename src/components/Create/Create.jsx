import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/login.css";
import "./create.css";
import { useAuth } from "../../contexts/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

function Create() {
  const [rBusiness, setCheck] = useState("Normal");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [licence, setLicence] = useState("");
  const [pincode, setPincode] = useState("");

  const [eyeSize1, setEyeSize1] = useState("show-eye");
  const [eyeSize2, setEyeSize2] = useState("show-eye");
  const [flag, setFlag] = useState(false);

  const navigate = useNavigate();

  const { signup } = useAuth();

  const eyeShow = (e) => {
    if (flag) {
      setEyeSize1("hide-eye");
      setFlag(!flag);
      setEyeSize2("show-eye");
    } else {
      setEyeSize1("show-eye");
      setFlag(!flag);
      setEyeSize2("hide-eye");
    }
  };

  const btnHandle = async (e) => {
    e.preventDefault();
    const data = {
      rBusiness,
      name,
      email,
      phone,
    };
    try {
      const res = await signup(email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
      }).then(() => navigate("/Home"));
      if (rBusiness) {
        await setDoc(doc(db, "users", res.user.uid), {
          ...data,
          address,
          pincode,
          licence,
        });
      }
    } catch (error) {
      console.log({ error });
    }
  };
  let resize = "null";

  rBusiness === "pending" ? (resize = "resize") : (resize = "null");

  return (
    <section className="login create">
      <div className="qout">
        <span className="heading">Deli-Mate</span>
        <h1>LET'S START SAVING FOOD.</h1>
      </div>
      <div className="login-box create-box">
        <span className="heading">Create Account</span>
        <form onSubmit={btnHandle} className="form">
          {/* Username or Provider Name */}
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Username/Provider Name"
            required
            pattern="^[a-zA-Z0-9_].{2,15}$"
          />

          {/*______*/}

          {/* Email */}
          <input
            value={email}
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            required
            pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
            title="give proper email"
          />

          {/*______*/}

          {/* Password */}
          <i
            className={`fa-solid fa-eye create-eye ${eyeSize1}`}
            onClick={eyeShow}
          ></i>
          <i
            className={`fa-sharp fa-solid fa-eye-slash create-eye ${eyeSize2}`}
            onClick={eyeShow}
          ></i>
          <input
            value={password}
            type={flag ? "text" : "password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            required
            title="atleast 4 character and must be contains number"
          />

          {/*______*/}

          {/* Phone Number */}
          <input
            value={phone}
            type="number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="phone Number"
            required
          />

          <div className="checkbox">
            <input
              type="checkbox"
              onChange={(e) => {
                e.target.checked ? setCheck("pending") : setCheck("Normal");
              }}
            />
            <span>For Business</span>
          </div>

          {/*------------------For Buisiness-------------------*/}

          <div className={`forBusiness ${resize}`}>
            {/*______*/}

            {/* Address */}
            {rBusiness === "pending" && (
              <div className="Address address">
                <input
                  required
                  value={address}
                  type="text"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  className="address"
                  placeholder="Address"
                />
                <input
                  type="number"
                  value={pincode}
                  onChange={(e) => {
                    setPincode(e.target.value);
                  }}
                  className="pincode"
                  placeholder="Pincode"
                  required
                  pattern="^\d{6}$"
                />
              </div>
            )}
            {/*  */}

            {/* Lincence Number */}
            {rBusiness === "pending" && (
              <input
                required
                value={licence}
                type="text"
                onChange={(e) => {
                  setLicence(e.target.value);
                }}
                className="licence"
                placeholder="Licence Number"
              />
            )}
          </div>
          <button>Create</button>
          <div className="login-other create-other">
            <span>
              <Link to={"/login"}>
                <span>sign in</span>
              </Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Create;
