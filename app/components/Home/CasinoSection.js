import React from 'react';

export default function CasinoSection() {
  return (
    <section className="relative bg-[#90722b] mb-[80px] text-white py-16">
      {/* Casino Title with Icon */}
      <div className="flex items-center gap-2 mb-4 justify-center">
        <div className="">
          <img
            src="/images/c-ludo.png"
            alt="Dice Icon"
            className="lg:h-32 lg:w-40 w-28 h-22"
          />
          {/* <h2 className="text-3xl font-bold text-gradient-to-r from-[#D4AC54] via-[#c7a066] to-[#907432]">
            Casino
          </h2> */}
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-6">
        {/* Left Content */}
        <div className="max-w-xl space-y-6">
          {/* Heading */}
          <h3 className="text-2xl font-semibold">The Casino</h3>

          {/* Paragraph */}
          <p className="text-gray-300 leading-relaxed">
            Step into the thrilling world of Casino games at Royal Mega, where
            every spin, deal, and roll brings you closer to winning big.
            Experience a wide range of classic and modern casino games designed
            to keep the adrenaline pumping. With us, every game is a chance to
            win and a moment to remember!
          </p>

          {/* Button */}
          <button className="px-7 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-md text-black font-semibold shadow-lg hover:from-yellow-300 hover:to-orange-400 transition border border-[#ff510182]">
            Coming soon
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 hidden sm:block">
          <img
            src="/images/thumb.png"
            alt="Casino Cards"
            className="w-[380px] md:w-[460px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
