import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const showToast = (message, type = 'default') => {
  toast.dismiss(); // close any previous toast
  toast(message, {
    type,
    toastId: 'GLOBAL_TOAST', // single id for all
  });
};

export default function SelectionSummary({
  selectedMain = [],
  selectedMega = null,
  onClear = () => {},
  onAutoSelect = () => {},
  entryPrice = 40,
}) {
  const dispatch = useDispatch();
  const jackpot = useSelector((state) => state.jackpot.currentJackpot);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAddToCart = () => {
    if (!jackpot?.name) {
      showToast('Please select a jackpot first!', 'error');
      return;
    }

    if (!selectedMain.length || selectedMega == null) {
      showToast('Please select all numbers before adding to cart!', 'error');
      return;
    }

    // Normalize the new sequence
    const currentSequence = [...selectedMain, selectedMega]
      .map(Number)
      .sort((a, b) => a - b)
      .join('-');

    // Check duplicates in cart across all sequences of the same jackpot
    const isDuplicate = cartItems.some((item) => {
      if (item.name.trim() !== jackpot.name.trim()) return false;

      // item.sequences may be multiple sequences
      return item.sequences?.some((seq) => {
        const seqString = [...seq]
          .map(Number)
          .sort((a, b) => a - b)
          .join('-');
        return seqString === currentSequence;
      });
    });

    if (isDuplicate) {
      showToast(
        'Duplicate selection! This sequence is already in the cart.',
        'error',
      );
      console.log('Duplicate detected:', currentSequence);
      return;
    }

    // Add new sequence to cart
    dispatch(
      addToCart({
        name: jackpot.name,
        price: entryPrice ?? Number(jackpot.ticketPrice.replace('₹', '')),
        selectedMain,
        selectedMega,
      }),
    );

    showToast('Added to cart successfully!', 'success');
    // ✅ Clear the selections after adding
    onClear();
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Jackpot Info */}
      {jackpot?.name && (
        <div className="px-6 text-lg font-semibold text-gray-700">
          Jackpot: {jackpot.name}
        </div>
      )}

      {/* Selected Numbers */}
      <div className="p-6">
        <div className="p-4 border rounded-lg bg-white flex flex-col md:flex-row items-center justify-between shadow-sm">
          <div className="flex items-center flex-wrap gap-2 mb-4 md:mb-0">
            <span className="text-gray-600 font-medium mr-2">
              Selected numbers:
            </span>
            <br />
            {selectedMain.length > 0 ? (
              selectedMain.map((num, i) => (
                <span
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AC54] text-black font-semibold shadow-md"
                >
                  {num.toString().padStart(2, '0')}
                </span>
              ))
            ) : (
              <span className="text-gray-400 italic">No numbers selected</span>
            )}
            {selectedMega && (
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white font-semibold shadow-md">
                {selectedMega.toString().padStart(2, '0')}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClear}
              className="px-5 py-2 border border-gray-300 text-gray-600 rounded-full hover:bg-gray-100 transition"
            >
              Clear
            </button>
            <button
              onClick={onAutoSelect}
              className="px-5 py-2 border border-gray-300 text-gray-600 rounded-full hover:bg-gray-100 transition"
            >
              Auto select
            </button>
          </div>
        </div>
      </div>

      {/* Entry + Add to Cart */}
      <div className="flex items-center justify-between">
        <div className="px-10 py-3 bg-[#D4AC54] text-black font-semibold rounded-r-md shadow cursor-default">
          Entry ₹{entryPrice}
        </div>
        <button
          onClick={handleAddToCart}
          className="px-8 py-3 m-6 bg-[#D4AC54] text-black rounded-full shadow hover:bg-yellow-600 transition"
        >
          Add To Cart
        </button>
      </div>

      {/* ToastContainer must be mounted once */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

SelectionSummary.propTypes = {
  selectedMain: PropTypes.arrayOf(PropTypes.number),
  selectedMega: PropTypes.number,
  onClear: PropTypes.func,
  onAutoSelect: PropTypes.func,
  entryPrice: PropTypes.number,
};
