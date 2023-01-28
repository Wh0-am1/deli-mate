import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";
import "./create.css";
import { useAuth } from "../../contexts/AuthContext";

function Create() {
  const [check, setCheck] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [licence, setLicence] = useState("");

  const [eyeSize1, setEyeSize1] = useState("show-eye");
  const [eyeSize2, setEyeSize2] = useState("hide-eye");
  const [flag, setFlag] = useState(true);

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

  const btnHandle = (e) => {
    e.preventDefault();
    console.log({
      check,
      name,
      password,
      email,
      phone,
      address,
      licence,
    });
    try {
      const res = signup(email, password);
      console.log({ res });
    } catch (error) {
      console.log({ error });
    }
  };
  let resize = "null";

  check ? (resize = "resize") : (resize = "null");

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
            pattern="^(?=.*\d).{4,8}$"
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
                setCheck(e.target.checked);
              }}
            />
            <span>For Business</span>
          </div>

          {/*------------------For Buisiness-------------------*/}

          <div className={`forBusiness ${resize}`}>
            {/*______*/}

            {/* Address */}
            {check && (
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
                  className="pincode"
                  placeholder="Pincode"
                  required
                  pattern="^\d{6}$"
                />
              </div>
            )}
            {/*  */}

            {/* Lincence Number */}
            {check && (
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
