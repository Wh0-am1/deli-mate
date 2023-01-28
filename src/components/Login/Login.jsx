import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
//comment
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eyeSize1, setEyeSize1] = useState("show-eye");
  const [eyeSize2, setEyeSize2] = useState("hide-eye");
  const [flag, setFlag] = useState(false);

  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();
    if (email === "deli-mate" && password === "deli-mate")
      navigate("/Home", { replace: true });
  };

  const eyeShow = (e) => {
    if (e.target.id === "1") {
      setEyeSize1("hide-eye");
      setFlag(!flag);
      setEyeSize2("show-eye");
    } else {
      setEyeSize1("show-eye");
      setFlag(!flag);
      setEyeSize2("hide-eye");
    }
  };

  return (
    <section className="login">
      <div className="bg-img"></div>
      <div className="login-box">
        <span className="heading">Deli-Mate</span>
        <form onSubmit={submitHandle} className="form login-form">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i
            className={`fa-solid fa-eye show-hide ${eyeSize1}`}
            onClick={eyeShow}
          ></i>
          <i
            className={`fa-sharp fa-solid fa-eye-slash show-hide ${eyeSize2}`}
            onClick={eyeShow}
          ></i>
          <input
            type={flag ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
          <div className="login-other">
            <span>forgot password?</span>
            <span>
              <Link to="/create">
                <span>create account</span>
              </Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
