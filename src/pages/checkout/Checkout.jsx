import React from "react";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import Summary from "../../components/Summary/Summary";
import "./Checkout.scss";

const Checkout = () => {
  return (
    <div className="container">
      <div className="container__containerForm">
        <h1 className="container__header">PAYMENT AND SHIPPING</h1>
        <PaymentForm />
      </div>
      <div className="container__containerSummary">
        <Summary />
      </div>
    </div>
  );
};

export default Checkout;

