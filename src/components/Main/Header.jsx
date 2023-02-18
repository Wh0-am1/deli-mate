import { where } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { dataWhere } from "../../dataManagement";
import "./Header.css";

function Hedear(props) {
  const { role } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState("");

  async function clickHandling() {
    const List = await dataWhere("users", [where("name", "==", data)]);

    List[0] && props.setSearch(where("user_Id", "==", List[0].id));
    !List[0] && props.setSearch(where("user_Id", "==", "abc"));
  }

  return (
    <section className="Header">
      <div className="container">
        <div className="header">
          <div className="search">
            <input
              type="text"
              placeholder="search"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <i
              className="icon fa-sharp fa-solid fa-magnifying-glass"
              onClick={() => {
                if (data) {
                  clickHandling();
                }
              }}
            />
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to={"/Account"}>Account</Link>
              </li>
              <li onClick={props.setWidth}>Filter</li>
              {role === "Business" && (
                <li>
                  <Link to={"/Business"}>Business</Link>
                </li>
              )}
              {role === "Admin" && (
                <li>
                  <Link to={"/Admin"}>Admin</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hedear;
