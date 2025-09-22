import React from 'react';

import PropTypes from 'prop-types';

export default function SelectionSummary({
  selectedMain,
  selectedMega,
  onClear,
  onAutoSelect,
  entryPrice,
}) {
  return (
    <div className="flex flex-col gap-2">
      {/* Part 1: Selected numbers + Clear/Auto */}
      <div className="p-6">
        <div className="p-4 border rounded-lg bg-white flex flex-col md:flex-row items-center justify-between shadow-sm">
          {/* Selected Numbers */}
          <div className="flex items-center flex-wrap gap-2 mb-4 md:mb-0">
            <div className="font-semibold text-gray-600 lg:mr-8">
              Selected numbers:
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {selectedMain.map((num, index) => (
              <span
                key={index}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#D4AC54] text-black-800 font-medium shadow"
              >
                {num}
              </span>
            ))}
            {selectedMega && (
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-red-500 text-white font-medium shadow">
                {selectedMega}
              </span>
            )}
          </div>

          {/* Buttons */}
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

      {/* Part 2: Entry price + Add to Cart */}
      <div className="flex items-center justify-between">
        <button className="px-10 py-3 bg-[#D4AC54] text-black font-semibold rounded-r-md shadow hover:bg-yellow-600 transition">
          Entry ₹{entryPrice}
        </button>
        <button className="px-8 py-3 m-6 bg-[#D4AC54] text-black rounded-full shadow hover:bg-yellow-600 transition">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

SelectionSummary.propTypes = {
  selectedMain: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedMega: PropTypes.string,
  onClear: PropTypes.func.isRequired,
  onAutoSelect: PropTypes.func.isRequired,
  entryPrice: PropTypes.number.isRequired,
};
