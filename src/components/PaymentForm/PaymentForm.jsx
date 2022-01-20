import React from "react";
import Input from "../input/Input";
import Select from "../select/Select";
import { optionsCountries } from "../../constants/countries";
import "./PaymentForm.scss";

//Hardcoded variant for only one of the countries, did not expand the Region/State functionality due to time constraints.
const optionsState = [
  { label: "Vilniaus r." },
  { label: "Kauno r." },
  { label: "Klaipedos r." },
  { label: "Ukmerges r." },
  { label: "Telsiu r." },
];

const PaymentForm = () => {
  return (
    <div className="formContainer">
      <h2>Customer Information</h2>
      <h3>Fields marked as (*) are required.</h3>
      <div className="formContainer__inputContainer">
        <Input placeholder="First name*" />
        <Input placeholder="Last name*" />  
      </div>
      <h2>Shipping Address</h2>
      <div className="formContainer__inputContainer">
        <Input placeholder="Address*" state="wide" />
        <Select options={optionsCountries} label="Country*" />
        <Select options={optionsState} label="Region/State*" />
        <Input placeholder="Postal code*" state="thin" />
      </div>
      <h2>Payment Method</h2>
      <div className="formContainer__cardContainer">
        <div className="formContainer__cardHeader">
          <h2>Credit Card</h2>
        </div>
        <div className="formContainer__cardDetails">
          <Input placeholder="Card number" state="wide" />
          <Input placeholder="MM/YY" state="mini" />
          <Input placeholder="CVV" state="mini" />
        </div>
      </div>
      <button>complete order</button>
      <section className="formContainer__securityLogoContainer">
        <div className="logo norton"></div>
        <div className="logo verisign"></div>
        <div className="logo mcafee"></div>
        <div className="logo comodo"></div>
      </section>
    </div>
  );
};

export default PaymentForm;
