import React from "react";

function PaymentCardCreditCard() {
  return (
    <div className="flex flex-col w-full h-[35vh] border rounded-2xl p-3 space-y-3 md:space-y-4">
      <div className="flex justify-between items-center ">
        <div className="flex items-center space-x-2">
          <p>A</p>
          <h1>UPI Apps</h1>
        </div>
        <button className="p-2 rounded-md text-edfling-green text-medium font-medium border border-edfling-green">
          + Add Card
        </button>
      </div>
    </div>
  );
}

export default PaymentCardCreditCard;
