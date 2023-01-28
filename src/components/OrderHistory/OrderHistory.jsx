import React from "react";
import '../Account/Account.css'

function OrderHistory() {
  return (
    <section className="order-history">
      <div className="history-details">
        <p>
          <label>Date and Tme :</label> 01/02/2023 4:35pm
        </p>
        <p>
          <label>Source :</label> Deli-Mate
        </p>
        <p>
          <label>Generated Number :</label> 78459658
        </p>
        <p>
          <label>Quantitity :</label> 4
        </p>
        <p>
          <label>Price : </label> 450/-
        </p>
      </div>
    </section>
  );
}

export default OrderHistory;
