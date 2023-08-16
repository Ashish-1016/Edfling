import React from "react";
import PaymentMethods from "../Components/Page28/PaymentMethods";
import OrderBreakdown from "../Components/Page28/OrderBreakdown";

function Page28() {
  return (
    <section className="md:flex  md:flex-row md:justify-center md:min-w-4xl flex flex-col p-3 ">
      <section className="md:basis-1/2  p-3 md:p-5">

        <PaymentMethods />

      </section>
      
      <section className="md:basis-1/3  p-3 md:p-5">
        <OrderBreakdown />
      </section>
    </section>
  );
}

export default Page28;
