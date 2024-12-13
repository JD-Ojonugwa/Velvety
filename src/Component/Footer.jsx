import React from "react";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#3C5E39] text-[#ebefe7] shadow-md" id="footer">
      <div className="flex flex-col md:flex-row w-full justify-between">
        {/* Footer logo and info */}
        <div className="py-4 px-6 flex-1 flex flex-col items-center cursor-pointer">
          <img src={Logo} alt="Velvety Logo" className="h-10 w-auto" />
          <h5 className="text-[#899f87] mt-4">Opening hours</h5>
          <p className="mt-3 text-center">Mon to Sat: 10:30 a.m. to 6 p.m.</p>
          <div className="mt-7 flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ebefe7"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.243 1.308 3.609.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.609 1.308-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.243-1.308-3.609-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.609.975-.975 2.243-1.246 3.609-1.308C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.717 0 8.294.015 7.052.072 5.784.131 4.516.324 3.387 1.454 2.257 2.583 2.064 3.851 2.005 5.119.945 6.36.93 6.783.93 12s.015 5.64.072 6.881c.059 1.268.252 2.536 1.383 3.665 1.13 1.13 2.398 1.323 3.666 1.382 1.241.057 1.664.072 6.879.072s5.64-.015 6.881-.072c1.268-.059 2.536-.252 3.665-1.383 1.13-1.129 1.324-2.397 1.383-3.665.057-1.241.072-1.664.072-6.879s-.015-5.64-.072-6.881c-.059-1.268-.252-2.536-1.383-3.665-1.13-1.13-2.397-1.323-3.665-1.382C15.584.015 15.204 0 12 0z" />
              <path d="M12 5.838a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zm0 10.163a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ebefe7"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current"
            >
              <path d="M17.343 2H14.74L12.002 7.906 9.227 2H6.626L10.562 9.943 5.239 18H7.84l4.328-7.519L16.436 18H19l-5.303-8.38L17.343 2z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ebefe7"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.482v-9.294H9.847v-3.622h2.96V8.413c0-2.933 1.793-4.533 4.415-4.533 1.253 0 2.329.093 2.64.135v3.065l-1.812.001c-1.421 0-1.696.675-1.696 1.664v2.182h3.391l-.441 3.622h-2.95V24h5.779c.731 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </div>
        </div>

        {/* Shop */}
        <div className="py-4 px-6 flex-1  items-center text-center cursor-pointer">
          <h5 className="text-2xl text-[#899f87] mb-3 pt-0">Shop</h5>
          <p className="mb-2 hover:text-green-400">Skincare</p>
          <p className="mb-2 hover:text-green-400">Facials</p>
          <p className="mb-2 hover:text-green-400">Soaps</p>
          <p className="mb-2 hover:text-green-400">Candles</p>
          <p className="mb-2 hover:text-green-400">Auto Fragrance</p>
          <p className="mb-2 hover:text-green-400">Gifts</p>
        </div>

        {/* Help Desk */}
        <div className="py-4 px-6 flex-1  items-center text-center cursor-pointer">
          <h5 className="text-2xl text-[#899f87] mb-3 pt-0">Help Desk</h5>
          <p className="mb-2 hover:text-green-400">Chat</p>
          <p className="mb-2 hover:text-green-400">FAQ</p>
          <p className="mb-2 hover:text-green-400">Shipping and Returns</p>
          <p className="mb-2 hover:text-green-400">Contact</p>
          <p className="mb-2 hover:text-green-400">Policies</p>
          <p className="mb-2 hover:text-green-400">Accessibility</p>
          <p className="mb-2 hover:text-green-400">My Account</p>
        </div>

        {/* Stores */}
        <div className="py-4 px-6 flex-1 flex-col items-center text-center cursor-pointer">
          <h5 className="text-2xl text-[#899f87] mb-3 pt-0">Stores</h5>
          <p className="mb-2 hover:text-green-400">Lagos</p>
          <p className="mb-2 hover:text-green-400">Abuja</p>
          <p className="mb-2 hover:text-green-400">Ibadan</p>
          <p className="mb-2 hover:text-green-400">Port Harcourt</p>
          <p className="mb-2 hover:text-green-400">Benin</p>
          <p className="mb-2 hover:text-green-400">Kano</p>
          <p className="mb-2 hover:text-green-400">Jos</p>
          <p className="mb-2 hover:text-green-400">Kaduna</p>
        </div>
      </div>

      <div
        className="flex items-center justify-between px-8 py-3 border-t-[1px] border-[#899f87]
"
      >
        <p>© Coded by JD 2024.</p>
        <ul className="flex space-x-3 cursor-pointer">
          <li className="hover:text-green-400">Licenses</li>
          <li className="hover:text-green-400">Privacy</li>
          <li className="hover:text-green-400">Terms</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
