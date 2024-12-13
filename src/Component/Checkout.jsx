import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Header from "./Header";

const Checkout = ({ total }) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [country, setCountry] = useState("Nigeria");
  const [otherCountry, setOtherCountry] = useState("");
  const [formFields, setFormFields] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    firstName: "",
    lastName: "",
    pin: "",
  });

  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
  };

  const validateForm = () => {
    // validation for required fields
    const { cardNumber, expirationDate, cvv, firstName, lastName, pin } =
      formFields;
    if (
      !cardNumber ||
      !expirationDate ||
      !cvv ||
      !firstName ||
      !lastName ||
      !pin
    ) {
      toast.error("Please fill all required fields.");
      return false;
    }

    // Validate card fields
    if (cardNumber.length < 16) {
      toast.error("Please enter a valid card number.");
      return false;
    }
    if (cvv.length !== 3) {
      toast.error("Please enter a valid CVV.");
      return false;
    }
    if (!/^\d{2}\/\d{2}$/.test(expirationDate)) {
      toast.error("Please enter a valid expiration date (MM/YY).");
      return false;
    }

    return true;
  };

  const showNotice = () => {
    if (validateForm()) {
      toast.success("Your payment is being processed!");
    }
  };

  const notify = () => {
    toast.success("Payment Successful! Your payment is being processed.");
  };

  return (
    <>
      <Header />

      <div className="flex justify-center items-center min-h-screen bg-[#f5f2ed]">
        <div className="w-full max-w-2xl bg-[#ffffff] py-8 px-12 md:px-16 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-[#3C5E39] mb-6">Checkout</h2>

          {/* Payment Method Selection */}
          <div className="mb-4">
            <label className="text-[#3C5E39] font-semibold mb-2 block">
              * Required
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center text-[#3C5E39]">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => handlePaymentSelection("card")}
                  className="mr-2 accent-[#899f87]"
                />
                Credit/debit card
              </label>
              <label className="flex items-center text-[#3C5E39]">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="transfer"
                  onChange={() => handlePaymentSelection("transfer")}
                  className="mr-2 accent-[#899f87]"
                />
                Transfer
              </label>
            </div>
          </div>

          {/* Card Payment Form */}
          {paymentMethod === "card" && (
            <div className="mt-4">
              <form>
                {/* Card Icons */}
                <div className="flex gap-2 mb-4">
                  {/* SVGs for Visa and MasterCard */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 72 48"
                  >
                    <rect width="72" height="48" fill="#1a1f71" />
                    <path
                      fill="#fff"
                      d="M25.4 33.7h-4.4l-2.8-18h4.4l2.8 18zm19-17.8c-.9-.3-2.4-.6-4.2-.6-4.7 0-8 2.4-8.1 5.7 0 2.5 2.4 3.9 4.1 4.7 1.8.8 2.3 1.3 2.3 2 0 1-1.3 1.5-2.5 1.5-1.7 0-2.6-.2-4-.8l-.5-.2-.5 3.1c.8.4 2.5.8 4.2.9 4 0 8.1-2.3 8.1-5.9 0-2-.6-3.5-3.5-4.8-1.5-.8-2.4-1.3-2.4-2 0-.6.7-1.3 2.4-1.3 1.3 0 2.4.3 3.2.6l.4.2.5-3zm9.3 11.6c.7-1.7 3.5-8.2 3.5-8.2-.1 0 .7-1.7 1.1-2.8l.2 1c0 .3.7 3.3.7 3.9 0 .2 0 .3.1.5l2.4 11.5h-4.5l-3.1-7.8c-.1-.3-.2-.4-.4-.5h-4.6l-.1.6c0 .3-.4 1.9-.4 1.9h4.4zm-8.1-5.6h3.1l-2.6 7.1h-2.6l2.1-7.1z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                  >
                    <circle cx="14" cy="24" r="14" fill="#EB001B" />
                    <circle cx="34" cy="24" r="14" fill="#F79E1B" />
                    <path
                      d="M20 24a14 14 0 0 1 0-13.8A14 14 0 0 1 28 24a14 14 0 0 1 0 13.8A14 14 0 0 1 20 24z"
                      fill="#FF5F00"
                    />
                  </svg>
                </div>

                {/* Card Number, Expiration Date, and CVV */}
                <div className="flex gap-4 mb-4">
                  <div className="w-2/3">
                    <label className="block text-[#3C5E39] font-semibold mb-2">
                      Card Number*
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formFields.cardNumber}
                      onChange={handleInputChange}
                      placeholder="Card Number"
                      maxLength="19"
                      className="w-full p-2 border border-[#899f87] rounded bg-[#e4ece0]"
                    />
                  </div>
                  <div className="w-1/3">
                    <label className="block text-[#3C5E39] font-semibold mb-2">
                      Date*
                    </label>
                    <input
                      type="text"
                      name="expirationDate"
                      value={formFields.expirationDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="w-full p-2 border border-[#899f87] rounded bg-[#e4ece0]"
                    />
                  </div>
                  <div className="w-1/3">
                    <label className="block text-[#3C5E39] font-semibold mb-2">
                      CVV*
                    </label>
                    <input
                      type="password"
                      name="cvv"
                      value={formFields.cvv}
                      onChange={handleInputChange}
                      placeholder="CVV"
                      className="w-full p-2 border border-[#899f87] rounded bg-[#e4ece0]"
                    />
                  </div>
                </div>

                {/* Name Fields */}
                <div className="flex gap-4 mb-4">
                  <div className="w-full">
                    <label className="block text-[#3C5E39] font-semibold mb-2">
                      First name*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formFields.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="w-full p-2 border border-[#899f87] rounded bg-[#e4ece0]"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-[#3C5E39] font-semibold mb-2">
                      Last name*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formFields.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="w-full p-2 border border-[#899f87] rounded bg-[#e4ece0]"
                    />
                  </div>
                </div>

                {/* Country and Pin */}
                <div className="flex gap-4 mb-4">
                  <div className="w-full">
                    <label className="block text-[#3C5E39] font-semibold mb-2">
                      Country*
                    </label>
                    <select
                      className="w-full p-2 border border-[#899f87] rounded bg-[#e4ece0]"
                      value={country}
                      onChange={handleCountryChange}
                    >
                      <option value="Nigeria">Nigeria</option>
                      <option value="Other">Other</option>
                    </select>

                    {country === "Other" && (
                      <input
                        type="text"
                        value={otherCountry}
                        onChange={(e) => setOtherCountry(e.target.value)}
                        placeholder="Enter country name"
                        className="w-full p-2 mt-2 border border-[#899f87] rounded bg-[#e4ece0]"
                      />
                    )}
                  </div>
                  <div className="w-full">
                    <label className="block text-[#3C5E39] font-semibold mb-2">
                      PIN*
                    </label>
                    <input
                      type="password"
                      name="pin"
                      value={formFields.pin}
                      onChange={handleInputChange}
                      placeholder="Enter PIN"
                      maxLength="4"
                      className="w-full p-2 border border-[#899f87] rounded bg-[#e4ece0]"
                    />
                  </div>
                </div>

                {/* Pay Button */}
                <button
                  onClick={showNotice}
                  type="button"
                  className="w-full py-3 mt-6 font-semibold text-white bg-[#3C5E39] rounded hover:bg-[#899f87] transition-colors"
                >
                  Pay {total ? `₦${total}` : ""}
                </button>
              </form>
            </div>
          )}

          {/* Transfer payment card */}
          {paymentMethod === "transfer" && (
            <div className="mt-4">
              <p className="text-[#3C5E39] font-semibold mb-2">
                Velvety Bank Details
              </p>
              <div className="mb-4">
                <p className="text-gray-700">Account Number: 1234567890</p>
                <p className="text-gray-700">Account Name: Velvety Bank</p>
                <p className="text-gray-700">Bank Name: Wema</p>
              </div>
              <button
                onClick={notify}
                type="button"
                className="w-full mt-4 bg-[#899f87] text-white font-semibold py-2 rounded hover:bg-[#3C5E39]"
              >
                Click Here After Payment
              </button>
            </div>
          )}
          <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
      </div>
    </>
  );
};

export default Checkout;
