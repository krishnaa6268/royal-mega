import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from '@/contexts/CartContext';

export default function SelectionSummary({
  selectedMain = [],
  selectedMega = null,
  onClear = () => {},
  onAutoSelect = () => {},
  entryPrice = 40,
}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart('Royal Lotto', selectedMain, selectedMega, entryPrice);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Selected Numbers & Buttons */}
      <div className="p-6">
        <div className="p-4 border rounded-lg bg-white flex flex-col md:flex-row items-center justify-between shadow-sm">
          <div className="flex items-center flex-wrap gap-2 mb-4 md:mb-0">
            {selectedMain.length > 0 ? (
              selectedMain.map((num, i) => (
                <span
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#D4AC54] text-black font-medium shadow"
                >
                  {num}
                </span>
              ))
            ) : (
              <span className="text-gray-400 italic">No numbers selected</span>
            )}
            {selectedMega && (
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-red-500 text-white font-medium shadow">
                {selectedMega}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClear}
              className="px-4 py-2 border border-gray-400 text-gray-700 rounded-full hover:bg-gray-100 transition"
            >
              Clear
            </button>
            <button
              onClick={onAutoSelect}
              className="px-4 py-2 border border-gray-400 text-gray-700 rounded-full hover:bg-gray-100 transition"
            >
              Auto select
            </button>
          </div>
        </div>
      </div>

      {/* Entry + Add to Cart */}
      <div className="flex items-center justify-between">
        <button className="px-10 py-3 bg-[#D4AC54] text-black font-semibold rounded-r-md shadow hover:bg-yellow-600 transition">
          Entry ₹{entryPrice}
        </button>
        <button
          onClick={handleAddToCart}
          className="px-8 py-3 m-6 bg-[#D4AC54] text-black rounded-full shadow hover:bg-yellow-600 transition"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

SelectionSummary.propTypes = {
  selectedMain: PropTypes.arrayOf(PropTypes.string),
  selectedMega: PropTypes.string,
  onClear: PropTypes.func,
  onAutoSelect: PropTypes.func,
  entryPrice: PropTypes.number,
};
