import React from "react";

function PaymentCardUPI() {
  return (
    <div className="flex flex-col w-full h-[35vh] border rounded-2xl p-3 space-y-3 md:space-y-4">
      <h3 className="text-xl font-semibold">UPI Apps</h3>
      <div className="flex justify-around ">
        <button className="p-2 border rounded-md focus-within:border">
          <img
            src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/GooglePayLogo.width-500.format-webp.webp"
            className="w-15 h-6"
          />
        </button>
        <button className="p-1 border rounded-md focus-within:border">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/1200px-PhonePe_Logo.svg.png"
            className="w-15 h-6"
          />
        </button>
        <button className="p-1 border rounded-md focus-within:border">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png?20170729032638"
            className="w-15 h-6"
          />
        </button>
        <button className="p-1 border rounded-md focus-within:border">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/BHIM_SVG_Logo.svg/2560px-BHIM_SVG_Logo.svg.png"
            className="w-15 h-6"
          />
        </button>
      </div>
      <div className="flex items-baseline space-x-2">
        <p>A</p>
        <h3>UPI ID</h3>
      </div>
      <div className="flex justify-start w-full border border-gray-800 p-2 rounded-md h-[8vh] space-x-1 md:space-x-5">
        <input
          type="text"
          className="bg-transparent  rounded-md p-2 basis-3/4  outline-none"
          placeholder="Enter your UPI ID"
        />
        <button className="rounded-md text-white font-semibold bg-edfling-green basis-1/4 text-lg text-center">
          Verify
        </button>
      </div>
    </div>
  );
}

export default PaymentCardUPI;
