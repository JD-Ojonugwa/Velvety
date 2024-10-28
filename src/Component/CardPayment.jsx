import React, { useState } from "react";

const CardPayment = ({ total }) => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardType: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment processed successfully!");
  };

  return (
    <div className="w-full bg-[#e4ece0] py-6 px-12 md:px-24 text-center">
      <h2 className="text-3xl font-bold text-[#899f87] mb-4">
        Enter Card Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={cardDetails.cardNumber}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md  border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#3C5E39]"
        />
        <select
          name="cardType"
          value={cardDetails.cardType}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md  border-gray-300  text-[#899f87] 
          focus:outline-none focus:ring-2 focus:ring-[#3C5E39]"
        >
          <option value="">Select Card Type</option>
          <option value="MasterCard">MasterCard</option>
          <option value="Verve">Verve</option>
        </select>
        <input
          type="text"
          name="expiryDate"
          placeholder="Expiry Date (MM/YY)"
          value={cardDetails.expiryDate}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md  border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#3C5E39]"
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={cardDetails.cvv}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md  border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#3C5E39]"
        />
        <button
          type="submit"
          className="bg-[#899f87] text-[#ebefe7] px-6 py-3 rounded-lg"
        >
          Pay ${total}
        </button>
      </form>
    </div>
  );
};

export default CardPayment;
