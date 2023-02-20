import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Hedear from "../components/Main/Header";
import Filter from "../components/Filter/Filter";
import Lists from "../components/Lists/Lists";
import "../components/Filter/Filter.css";
import { useAuth } from "../contexts/AuthContext";
import { where } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { dataWhere, removeArrayDup } from "../dataManagement";
import Notify from "../components/Notify/Notify";

let flag;

function Main({ log, setLogged }) {
  const { currentUser } = useAuth();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [qry, setQry] = useState([]);
  const [filter, setFilter] = useState([]);
  const [max, setMax] = useState(["!=", null]);
  const [sort, setSort] = useState([]);
  const [type, setType] = useState([]);
  const [rate, setRate] = useState([]);

  useEffect(() => {
    log && toast.success("Logged In");
    flag = true;

    return setLogged(false);
  }, []);
  useEffect(() => {
    const List = removeArrayDup(search, filter, rate);
    List[0] && setQry(where("user_Id", "in", List));
  }, [search, filter, rate]);

  const widthHandling = () => {
    if (flag) {
      setWidth("full");
      flag = !flag;
    } else {
      setWidth("zero");
      flag = !flag;
    }
  };
  useEffect(() => {
    const notify = async () => {
      const List = await dataWhere("report", [
        where("wFlag", "==", true),
        where("sid", "==", currentUser.uid),
      ]);
      setData(List);
    };
    notify();
  }, []);

  const [width, setWidth] = useState("zero");

  return (
    <section className="Main">
      <Hedear setWidth={widthHandling} setSearch={setSearch} />
      <div className="list-body">
        <ToastContainer
          theme="colored"
          autoClose="3000"
          position="bottom-left"
        />
        <div className="filter">
          <Filter
            width={width}
            setWidth={widthHandling}
            setFilter={setFilter}
            Max={setMax}
            Type={setType}
            Sort={setSort}
            st={sort}
            mx={max}
            tp={type}
            ft={filter}
            rt={rate}
            setRt={setRate}
            setQry={setQry}
          />
        </div>
        <Routes>
          <Route
            path="/"
            element={<Lists search={qry} Max={max} Sort={sort} Type={type} />}
          />
        </Routes>
      </div>
      {data[0] && (
        <Notify id={data[0].id} report={data[0].report} warn={data[0].warn} />
      )}
    </section>
  );
}

export default Main;
