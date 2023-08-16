import React, { useState } from "react";
import PaymentCardUPI from "./PaymentCardUPI";
import PaymentCardCreditCard from "./PaymentCardCreditCard";
import PaymentCardNetBanking from "./PaymentCardNetBanking";

function PaymentMethods() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col md:min-w-3xl">
      <h1 className="text-3xl font-semibold mb-10 md:mb-12">Payments</h1>
      <section className="flex flex-col space-y-5">
        <div
          onClick={() => handleRadioChange("option1")}
          className="flex items-center space-x-2 md:space-x-4 cursor-pointer"
        >
          <input
            type="radio"
            id="option1"
            name="options"
            value="option1"
            className="w-6 h-6 bg-edfling-green"
          />
          <p>A</p>
          <h2 className="text-xl text-edfling-green font-semibold">UPI</h2>
        </div>
        {selectedOption === "option1" && <PaymentCardUPI />}
        <div
          onClick={() => handleRadioChange("option2")}
          className="flex items-center space-x-2 md:space-x-4 cursor-pointer"
        >
          <input
            type="radio"
            id="option2"
            name="options"
            value="option2"
            className="w-6 h-6 bg-edfling-green"
          />
          <p>A</p>
          <h2 className="text-xl text-edfling-green font-semibold">
            Credit Card
          </h2>
        </div>
        {selectedOption === "option2" && <PaymentCardCreditCard />}
        <div
          onClick={() => handleRadioChange("option3")}
          className="flex items-center space-x-2 md:space-x-4 cursor-pointer "
        >
          <input
            type="radio"
            id="option3"
            name="options"
            value="option3"
            className="w-6 h-6 bg-edfling-green"
          />
          <p>A</p>
          <h2 className="text-xl text-edfling-green font-semibold">
            Net banking
          </h2>
        </div>
        {selectedOption === "option3" && <PaymentCardNetBanking />}
      </section>
    </div>
  );
}

export default PaymentMethods;
