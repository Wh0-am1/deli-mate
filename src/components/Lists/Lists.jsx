import React from "react";
import FoodList from "../FoodList/FoodList";
import './Lists.css'

function Lists() {
  return (
    <section className="main-body">
      <FoodList />
      <FoodList />
      <FoodList />
      <FoodList />
      <FoodList />
    </section>
  );
}

export default Lists;
