import React, { useState } from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdkoaylk", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <>
      <div className="bg-[#ebefe7] py-6 px-12 md:px-24" id="contact">
        <h2 className="text-[#899f87] font-bold text-center text-2xl">
          Contact Us
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-24 mt-8">
          {/* Left Section */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semi-bold text-[#3C5E39] mb-4 flex items-center">
              Send us a message
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" w-6 h-6 ml-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 4.989-8-4.989V6h16zm-8 7 8-4.989V18H4V8.511L12 13z" />
              </svg> */}
            </h3>
            <p className="text-[#899f87] mb-6">
              Feel free to reach out through the contact form or find our
              contact information below. Your feedback, questions, and
              suggestions are important to us as we strive to provide
              exceptional service.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-[#3C5E39] text-xl mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 4.989-8-4.989V6h16zm-8 7 8-4.989V18H4V8.511L12 13z" />
                  </svg>
                </span>
                <span className="text-[#899f87]">contact@Velvety.org</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#3C5E39] text-xl mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l1.69-1.69a1.004 1.004 0 0 1 1.11-.21c1.12.45 2.34.69 3.59.69.55 0 1 .45 1 1v3.59c0 .55-.45 1-1 1C10.39 22 2 13.61 2 3.999c0-.55.45-1 1-1h3.59c.55 0 1 .45 1 1 0 1.25.24 2.47.69 3.59.16.39.07.85-.21 1.11l-1.69 1.69z" />
                  </svg>
                </span>
                <span className="text-[#899f87]">+1 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#3C5E39] text-xl mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </span>
                <span className="text-[#899f87]">
                  Headquarter XYZ Ave, Lagos, Nigeria.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="Name"
                  placeholder="Enter your full name"
                  className="w-full p-3 bg-[#e4ece0] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3C5E39]"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="Email"
                  placeholder="Email address"
                  className="w-full p-3 bg-[#e4ece0] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3C5E39]"
                  required
                />
              </div>
              <div>
                <textarea
                  name="Message"
                  placeholder="Enter your message"
                  className="w-full p-3 bg-[#e4ece0] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3C5E39]"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full lg:w-auto bg-[#899f87] text-[#ebefe7] font-semibold py-3 px-6 rounded-md hover:bg-[#3C5E39] transition-colors flex items-center justify-center space-x-2"
              >
                <span>Submit</span>
                <span className="text-lg">→</span>
              </button>

              {formStatus === "success" && (
                <p className="text-[#3C5E39] font-semibold">
                  Thank you! Your message has been sent.
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-red-400 font-semibold mt-2">
                  Oops! Something went wrong, please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
