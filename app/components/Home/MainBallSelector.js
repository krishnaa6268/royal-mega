import React from 'react';
import PropTypes from 'prop-types';

export default function MainBallSelector({ numbers, onSelect }) {
  // Count how many are selected
  const selectedCount = numbers.filter((n) => n.selected).length;

  const handleClick = (num) => {
    // Allow deselect always
    if (num.selected) {
      onSelect(num);
    }
    // Allow select only if < 5 already selected
    else if (selectedCount < 5) {
      onSelect(num);
    }
    // Else block further selections
    else {
      alert('You can only select up to 5 numbers.');
    }
  };

  return (
    <div className=" bg-white">
      <h3 className="text-lg font-semibold mb-3 text-black">Main Balls</h3>
      <div className="p-4 border-[2px] rounded-lg h-auto lg:h-[95%] bg-white">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 m-4 gap-4 ">
          {numbers.map((num, index) => (
            <button
              key={index}
              onClick={() => handleClick(num)}
              disabled={!num.selected && selectedCount >= 5} // disable unselected when 5 are chosen
              className={`w-10 h-10 flex items-center justify-center rounded-full border transition
              ${
                num.selected
                  ? 'bg-[#D4AC54] text-white'
                  : selectedCount >= 5
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

MainBallSelector.propTypes = {
  numbers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};
