import React from "react";
import Header from "./Header";

const Cart = ({ cartItems, setCartItems }) => {
  const updateQuantity = (productId, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )
    );
  };

  const removeItem = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const getTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <Header />
      <div
        className="w-full bg-[#e4ece0] py-6 px-12 md:px-24 text-center"
        id="cart"
      >
        <h1 className="text-4xl font-bold text-[#899f87]">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-lg text-red-400 mt-4">Your cart is empty.</p>
        ) : (
          <div className="mt-6 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-[#ebefe7] p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-auto"
                  />
                  <div className="text-left text-[#899f87]">
                    <h4 className="font-bold">{item.name}</h4>
                    <p>${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.quantity === 1}
                      className="px-2 py-1 bg-[#899f87] text-[#ebefe7] rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 bg-[#899f87] text-[#ebefe7] rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="text-2xl font-semibold text-[#899f87] mt-6">
              Total: ${getTotal()}
            </div>
            <button className="bg-[#899f87] text-[#ebefe7] px-6 py-3 rounded-lg mt-4">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
