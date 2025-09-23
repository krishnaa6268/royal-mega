import React, { useState } from 'react';
import { Trash2, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function AddCart() {
  const { cartItems, removeFromCart, setCartItems } = useCart(); // assuming setCartItems exists
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Open modal to view ticket
  const handleViewTicket = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  // Delete a sequence from an item
  const handleDeleteSequence = (itemId, seqIndex) => {
    // Update cart items
    const updatedCart = cartItems.map((item) =>
      item.id === itemId
        ? {
            ...item,
            sequences: item.sequences.filter((_, idx) => idx !== seqIndex),
          }
        : item,
    );
    setCartItems(updatedCart);

    // Update modal state
    if (selectedItem?.id === itemId) {
      const updatedSelected = {
        ...selectedItem,
        sequences: selectedItem.sequences.filter((_, idx) => idx !== seqIndex),
      };
      setSelectedItem(updatedSelected);
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Left: Cart List */}
        <div className="flex-1 bg-black p-6 rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-6">Checkout</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-gray-300 border-separate border-spacing-y-4">
              <thead>
                <tr className="text-left text-sm text-gray-400">
                  <th>Draw Name</th>
                  <th>Date/Time</th>
                  <th>Your Sequence</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-gray-700 text-white"
                    >
                      <td className="py-3">{item.name}</td>
                      <td>{item.date}</td>
                      <td className="flex flex-wrap gap-2 py-2">
                        {(item.sequences[0] || []).map((num, i) => (
                          <span
                            key={i}
                            className="bg-white text-black px-2 py-1 rounded-md text-sm font-semibold"
                          >
                            {num}
                          </span>
                        ))}
                        <button
                          onClick={() => handleViewTicket(item)}
                          className="bg-red-600 text-white text-xs px-3 py-1 rounded hover:bg-red-700"
                        >
                          View Ticket
                        </button>
                      </td>
                      <td className="font-semibold text-yellow-400">
                        ₹{item.price}.00
                      </td>
                      <td>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center text-gray-400 py-4">
                      Your cart is empty
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Summary */}
        <div className="w-full md:w-80 bg-[#d4af37] text-black rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="space-y-3 text-sm">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b border-black/20 pb-1"
              >
                <span>{item.name}</span>
                <span className="font-semibold">₹{item.price}.00</span>
              </div>
            ))}
            <div className="flex justify-between text-lg font-bold pt-3">
              <span>Subtotal</span>
              <span>₹{subtotal}.00</span>
            </div>
          </div>
          <button className="w-full mt-6 bg-white text-black font-semibold py-2 rounded-lg shadow hover:bg-gray-100">
            Pay Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {openModal && selectedItem && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={20} />
            </button>

            {/* Title */}
            <h2 className="text-lg font-semibold mb-4 text-center">
              {selectedItem.name}
            </h2>

            {/* Sequences */}
            <div className="space-y-3">
              {selectedItem.sequences && selectedItem.sequences.length > 0 ? (
                selectedItem.sequences.map((seq, idx) => (
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
                ))
              ) : (
                <p className="text-gray-500 italic text-center">
                  No sequences available
                </p>
              )}
            </div>

            {/* OK button */}
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
