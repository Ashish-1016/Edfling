import React from "react";
import { Link } from "react-router-dom";

function OrderBreakdown() {
  return (
    <section className="flex flex-col items-start">
      <h1 className="text-2xl font-semibold mb-10 md:mb-12">Order Breakdown</h1>
      <p className="text-md text-gray-600 text-left">Plan Selected</p>
      <div className="flex justify-between items-baseline w-full">
        <h3 className="text-xl font-semibold mb-3 md:mb-4">
          Professional Membership 1 Month
        </h3>
        <Link className="text-md text-red-700 ">Change</Link>
      </div>
      <div className="flex justify-between items-baseline w-full">
        <div className="flex items-baseline">
          <p className="mr-2">A</p>
          <h3 className="text-lg font-semibold mb-3 md:mb-4">Apply Coupon</h3>
        </div>
        <Link className="text-md text-edfling-green">View Coupons</Link>
      </div>
      <div className="flex justify-start w-full border border-gray-800 p-2 rounded-md h-[8vh] space-x-1 md:space-x-5">
        <input
          type="text"
          className="bg-transparent  rounded-md p-2 basis-3/4  outline-none"
          placeholder="Enter 6 digit code"
        />
        <button className="rounded-md text-white font-semibold bg-edfling-green basis-1/4 text-lg text-center">
          Apply
        </button>
      </div>
      <p className="flex flex-col items-center w-full mt-4 md:mt-6">
        <Link className="text-md text-gray-600">View Coupons</Link>
      </p>
      <div className="flex flex-col w-full items-center mt-4 space-y-2 md:space-y-4">
        <h2 className="text-2xl font-semibold mb-4 md:mb-6">Breakdown</h2>
        <div className="flex justify-between items-baseline w-full">
          <h4 className="text-md text-gray-600 font-medium">SubTotal</h4>
          <p className="text-md text-gray-600 font-medium">INR 399</p>
        </div>
        <div className="flex justify-between items-baseline w-full">
          <h4 className="text-md text-gray-600 font-medium">CGST</h4>
          <p className="text-md text-gray-600 font-medium">INR 50.6</p>
        </div>
        <div className="flex justify-between items-baseline w-full">
          <h4 className="text-md text-gray-600 font-medium">SGST</h4>
          <p className="text-md text-gray-600 font-medium">INR 50.6</p>
        </div>
        <div className="flex justify-between items-baseline w-full">
          <h4 className="text-md text-gray-600 font-medium">Discounts</h4>
          <p className="text-md text-gray-600 font-medium">INR 0</p>
        </div>
        {/* Total */}
        <div className="flex justify-between items-baseline w-full">
          <h4 className="text-lg text-edfling-green font-medium">Total</h4>
          <p className="text-lg text-edfling-green font-medium">INR 500</p>
        </div>
        <button className=" rounded-md p-2 text-white font-semibold bg-edfling-green min-w-full text-lg text-center">Make Payment</button>
      </div>
      
    </section>
  );
}

export default OrderBreakdown;
