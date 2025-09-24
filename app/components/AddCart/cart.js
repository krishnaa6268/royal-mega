import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Trash2, X } from 'lucide-react';
import { removeFromCart, clearCart } from '@/redux/cartSlice';

export default function AddCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.sequences?.length || 1),
    0,
  );
  const handleViewTicket = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleDeleteSequence = (itemId, seqIndex) => {
    if (!selectedItem) return;

    const updatedSequences = (selectedItem.sequences || []).filter(
      (_, idx) => idx !== seqIndex,
    );

    setSelectedItem((prev) =>
      prev ? { ...prev, sequences: updatedSequences } : prev,
    );
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Left: Cart List */}
        <div className="flex-1 bg-black p-6 rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-6">Checkout</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-400">Your cart is empty</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-gray-300 border-separate border-spacing-y-4">
                <thead>
                  <tr className="text-left text-sm text-gray-400">
                    <th className="pb-2">Draw Name</th>
                    <th className="pb-2">Date/Time</th>
                    <th className="pb-2">Your Sequence</th>
                    <th className="pb-2">Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-gray-700 text-white"
                    >
                      <td className="py-3">{item.name}</td>
                      <td>{item.date}</td>
                      <td className="flex items-center gap-2 py-2">
                        {item.sequences?.length > 0 && (
                          <div className="flex items-center gap-2">
                            {item.sequences[item.sequences.length - 1].map(
                              (num, i) => (
                                <span
                                  key={i}
                                  className="bg-white text-black px-2 py-1 rounded-md text-sm font-semibold"
                                >
                                  {num}
                                </span>
                              ),
                            )}
                          </div>
                        )}

                        {item.sequences?.length > 1 && (
                          <button
                            onClick={() => handleViewTicket(item)}
                            className="ml-3 bg-red-600 text-white text-xs px-3 py-1 rounded hover:bg-red-700"
                          >
                            View Ticket
                          </button>
                        )}
                      </td>

                      <td className="font-semibold text-yellow-400">
                        ₹{item.price}.00
                      </td>
                      <td>
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Right: Summary */}
        {/* Right: Summary */}
        {cartItems.length > 0 && (
          <div className="w-full md:w-80 bg-[#d4af37] text-black rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Checkout</h2>
            <div className="space-y-3 text-sm">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b border-black/20 pb-1"
                >
                  <span>
                    Royal Lotto{' '}
                    <span className="text-xs text-black/70">/{item.name}</span>
                  </span>
                  <span className="font-semibold">
                    ₹{item.price} × {item.sequences?.length || 1} = ₹
                    {(
                      item.price * (item.sequences?.length || 1)
                    ).toLocaleString()}
                  </span>
                </div>
              ))}
              <div className="flex justify-between text-lg font-bold pt-3">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
            </div>
            <button
              onClick={() => dispatch(clearCart())}
              className="w-full mt-4 bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600"
            >
              Clear Cart
            </button>
            <button className="w-full mt-4 bg-white text-black font-semibold py-2 rounded-lg shadow hover:bg-gray-100">
              Pay Now
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {openModal && selectedItem && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-4 text-center">
              {selectedItem.name}
            </h2>
            <div className="space-y-3">
              {(selectedItem.sequences || []).map((seq, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="font-semibold">{idx + 1}.</span>
                  <div className="flex flex-wrap gap-2">
                    {(seq || []).map((num, i) => (
                      <span
                        key={i}
                        className="bg-white border border-gray-400 text-black px-2 py-1 rounded-md text-sm font-semibold"
                      >
                        {num}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleDeleteSequence(selectedItem.id, idx)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => setOpenModal(false)}
              className="mt-6 w-full bg-[#d4af37] text-black font-semibold py-2 rounded-lg hover:bg-yellow-500"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
