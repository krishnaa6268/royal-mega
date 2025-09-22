import React from 'react';
import { FaPlay } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative bg-black text-white py-16">
      <div className="absolute right-0 top-0">
        <img
          src="/images/net-bg.png"
          alt="Main Balls"
          className="w-auto h-auto"
        />
      </div>
      <div className="absolute left-0 bottom-0">
        <img
          src="/images/net-bg.png"
          alt="Main Balls"
          className="w-auto h-auto"
        />
      </div>

      <div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Section */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-500">
              Royal Lotto
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-lg">
              Join the excitement with Royal Mega’s Lottery games, offering you
              the chance to turn dreams into reality with every ticket. Whether
              you’re playing for fun or aiming for a life-changing win, our
              easy-to-play lotteries bring you closer to incredible prizes. Try
              your luck today and see if fortune favours you!
            </p>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-5xl font-bold">
              <span className="text-yellow-500">₹</span>5
              <span className="text-gray-400 text-3xl ml-1">cr</span>
            </h3>
            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-medium transition">
              <FaPlay /> Buy Tickets
            </button>
          </div>

          {/* Right Section - Lottery Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/images/lottery-balls.png"
              alt="Lottery Balls"
              className="w-72 md:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
