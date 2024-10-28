import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import CardPayment from "./CardPayment";

const Checkout = ({ total }) => {
  const navigate = useNavigate();
  // Render CardPayment on card selection
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
  };

  if (paymentMethod === "card") {
    // Render CardPayment on card selection
    return <CardPayment total={total} />;
  }

  return (
    <>
      <Header />
      {/* <div className="w-full bg-[#e4ece0] py-6 px-12 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-[#899f87] mb-4">
          Choose Payment Method
        </h2>
        <div className=" flex items-center gap-4">
          <button
            onClick={() => handlePaymentSelection("card")}
            className="w-full bg-[#899f87] text-[#ebefe7] py-3 rounded-lg"
          >
            Pay with Card
          </button>
          <button
            onClick={() => handlePaymentSelection("cash")}
            className="w-full bg-[#899f87] text-[#ebefe7] py-3 rounded-lg"
          >
            Pay with Cash
          </button>
          <button
            onClick={() => handlePaymentSelection("transfer")}
            className="w-full bg-[#899f87] text-[#ebefe7] py-3 rounded-lg"
          >
            Pay with Transfer
          </button>
        </div>
      </div> */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-2xl bg-[#e4ece0] py-8 px-12 md:px-24 text-center rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-[#899f87] mb-6">
            Choose Payment Method
          </h2>
          <div className="flex flex-col  items-center gap-4">
            <button
              onClick={() => handlePaymentSelection("card")}
              className="w-full bg-[#899f87] text-[#ebefe7] py-3 rounded-lg"
            >
              Pay with Card
            </button>
            <button
              onClick={() => handlePaymentSelection("cash")}
              className="w-full bg-[#899f87] text-[#ebefe7] py-3 rounded-lg"
            >
              Pay with Cash
            </button>
            <button
              onClick={() => handlePaymentSelection("transfer")}
              className="w-full bg-[#899f87] text-[#ebefe7] py-3 rounded-lg"
            >
              Pay with Transfer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
