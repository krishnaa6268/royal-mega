import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '@/redux/cartSlice';

export default function AddCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 border rounded-lg bg-white shadow-sm"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
                <p className="text-sm">
                  Numbers: {item.sequences[0].join(', ')}
                </p>
                <p className="text-sm font-medium">₹{item.price}</p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => dispatch(clearCart())}
            className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
