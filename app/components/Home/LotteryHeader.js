import React, { useState, useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import { setJackpot } from '@/redux/jackpotSlice';

const jackpots = [
  {
    id: 1,
    name: 'Mega Jackpot',
    prize: '₹5,00,00,000',
    ticketPrice: '₹100',
    date: 'Tuesday, July 9, 2026',
    img: '/images/mega-jackpot.png',
  },
  {
    id: 2,
    name: 'Mini Jackpot',
    prize: '₹1,00,00,000',
    ticketPrice: '₹50',
    date: 'Wednesday, July 10, 2026',
    img: '/images/mega-jackpot.png',
  },
  {
    id: 3,
    name: 'Satta Jackpot',
    prize: '₹1,50,00,000',
    ticketPrice: '₹50',
    date: 'Wednesday, January 10, 2026',
    img: '/images/mega-jackpot.png',
  },
];

export default function LotteryHeader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // for slide direction

  const jackpot = jackpots[currentIndex];
  const dispatch = useDispatch();

  // ✅ Sync selected jackpot with Redux
  useEffect(() => {
    dispatch(setJackpot(jackpots[currentIndex]));
  }, [currentIndex, dispatch]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? jackpots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === jackpots.length - 1 ? 0 : prev + 1));
  };

  const handlePickNumbers = () => {
    // Example: random 6 numbers (5 main + 1 mega)
    const sequence = Array.from(
      { length: 6 },
      () => Math.floor(Math.random() * 50) + 1,
    );

    dispatch(
      addToCart({
        name: jackpot.name,
        price: Number(jackpot.ticketPrice.replace('₹', '')),
        selectedMain: sequence.slice(0, 5),
        selectedMega: sequence[5],
      }),
    );
  };

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.6 } },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.6 },
    }),
  };

  return (
    <div className="bg-[#D0A549] rounded-lg lg:p-6 p-2 flex flex-col md:flex-row items-center justify-between shadow overflow-hidden">
      {/* Jackpot carousel */}
      <div className="flex items-center relative w-full md:w-auto">
        {/* Left Arrow */}
        <div
          className="text-black lg:p-2 rounded-full hover:text-gray-200 cursor-pointer z-10"
          onClick={handlePrev}
        >
          <IoIosArrowDropleft size={25} />
        </div>

        {/* Animated Jackpot Card */}
        <div className="relative flex-1 mx-2 overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={jackpot.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="border-2 border-white rounded-lg bg-gradient-to-r from-[#D4AC54] via-[#FFDEAC] to-[#E3BA5D] flex items-center gap-6"
            >
              <div className="relative flex justify-between lg:p-6 p-2 md:w-auto gap-3 lg:gap-6 w-full">
                {/* Left - Jackpot Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={jackpot.img}
                    alt={jackpot.name}
                    className="w-16 h-12 hidden md:block"
                  />
                  <div className="gap-2 flex flex-col text-xxl">
                    <h3 className="font-bold text-sm lg:text-[28px] text-[#1c1b1b]">
                      {jackpot.name}
                    </h3>
                    <p className="text-xs lg:text-xl text-[#1c1b1b]">
                      Mega Prize:{' '}
                      <span className="text-white text-xs lg:text-xl font-semibold">
                        {jackpot.prize}
                      </span>
                    </p>
                    <p className="text-xs lg:text-xl text-[#1c1b1b]">
                      Ticket Price:{' '}
                      <span className="text-white text-xs lg:text-xl font-semibold">
                        {jackpot.ticketPrice}
                      </span>
                    </p>
                    <p className="text-xs lg:text-xl lg:p-2 text-black flex items-center gap-1">
                      <FaCalendarAlt />{' '}
                      <span className="text-xs lg:text-xl">{jackpot.date}</span>
                    </p>
                  </div>
                </div>

                {/* Timer */}
                <div className="flex flex-col items-center gap-1 lg:gap-3 text-black">
                  <div>
                    <span>TIMER</span>
                  </div>
                  <div className="flex flex-row lg:gap-4 gap-1">
                    {['Hours', 'Minutes', 'Seconds'].map((unit) => (
                      <div key={unit} className="text-center">
                        <span className="text-xs">{unit}</span>
                        <p className="bg-white p-2 lg:p-4 text-sm lg:text-lg font-[Roboto_Mono]">
                          00
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 border-b-8 border-[#FD6259] rounded-br-lg w-[100px]"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:ml-1 hidden md:block ">
          <p className="text-white text-xs tracking-widest [writing-mode:vertical-rl] rotate-180">
            Slide for more draws
          </p>
        </div>

        {/* Right Arrow */}
        <div
          className="text-black ml-1 lg:p-2 rounded-full hover:text-gray-200 cursor-pointer z-10"
          onClick={handleNext}
        >
          <IoIosArrowDropright size={25} />
        </div>
      </div>

      {/* Right - Buttons */}
      <div className="flex gap-2 flex-row mt-3 md:mt-0">
        <div className="flex gap-2 flex-col">
          <button
            onClick={handlePickNumbers}
            className="bg-gradient-to-r from-[#d3a94d] via-[#f3cd95] to-[#e4b956] border-2 border-black px-4 lg:px-8 py-2 lg:py-5 rounded-full lg:text-sm text-xs hover:bg-black hover:text-white transition"
          >
            Pick Any 6 Numbers
          </button>
        </div>

        <div className="flex gap-2 lg:flex-col md:flex-col flex-row">
          <button className="bg-[#d29614] border-2 border-black px-4 lg:px-8 py-2 lg:py-5 rounded-full lg:text-sm text-xs hover:bg-black">
            Prizes & Info
          </button>
          <button className="bg-[#d29614] border-2 border-black px-4 lg:px-8 py-2 lg:py-5 rounded-full lg:text-sm text-xs hover:bg-black">
            Winners
          </button>
        </div>
      </div>
    </div>
  );
}
