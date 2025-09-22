import React from 'react';
import PropTypes from 'prop-types';

export default function MegaBallSelector({ numbers, onSelect }) {
  const selectedCount = numbers.filter((n) => n.selected).length;
  return (
    <div className="bg-white">
      <h3 className="text-lg font-semibold mb-3 text-black">Mega Ball</h3>
      <div className="p-4 border-[2px] rounded-lg h-[95%] bg-white">
        <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-5 m-4 gap-4 ">
          {numbers.map((num, index) => (
            <button
              key={index}
              onClick={() => onSelect(num)}
              className={`w-10 h-10 flex items-center justify-center rounded-full border transition
              ${
                num.selected
                  ? 'bg-red-500 text-white'
                  : selectedCount >= 1
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {num.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

MegaBallSelector.propTypes = {
  numbers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};
