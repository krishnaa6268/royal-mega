import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

export default function LotteryHeader() {
  return (
    <div className="bg-[#D0A549] rounded-lg lg:p-6 p-2 flex flex-col md:flex-row items-center justify-between shadow">
      <div className="flex items-center ">
        <div className="text-black lg:p-2 rounded-full hover:text-gray-200">
          <IoIosArrowDropleft size={25} />
        </div>
        <div className="border-2 border-white rounded-lg  bg-gradient-to-r from-[#D4AC54] via-[#FFDEAC] to-[#E3BA5D] flex items-center gap-6">
          <div className="relative flex justify-between lg:p-6 p-2 md:w-auto gap-3 lg:gap-6 w-auto">
            {/* Left - Jackpot Info */}
            <div className="flex items-center gap-4">
              <img
                src="/images/mega-jackpot.png"
                alt="Mega Jackpot"
                className="w-16 h-12 hidden md:block"
              />
              <div className="gap-2 flex flex-col  text-xxl">
                <h3 className="font-bold text-sm lg:text-[28px] text-[#1c1b1b]">
                  Mega Jackpot
                </h3>
                <p className="text-xs lg:text-xl text-[#1c1b1b]">
                  Mega Prize:{' '}
                  <span className="text-white text-xs lg:text-xl font-semibold">
                    ₹5,00,00,000
                  </span>
                </p>
                <p className="text-xs lg:text-xl text-[#1c1b1b]">
                  Ticket Price:{' '}
                  <span className="text-white text-xs lg:text-xl font-semibold">
                    ₹100
                  </span>
                </p>
                <p className="text-xs lg:text-xl lg:p-2 text-black flex items-center gap-1 ">
                  <FaCalendarAlt />{' '}
                  <span className="text-xs lg:text-xl">
                    Tuesday, July 9, 2024
                  </span>
                </p>
              </div>
            </div>

            {/* Middle - Timer */}
            <div className="flex flex-col items-center gap-1 lg:gap-3 text-black">
              <div>
                <span>TIMER</span>
              </div>
              <div className="flex flex-row lg:gap-4 gap-1">
                <div className="text-center ">
                  <span className="text-xs">Hours</span>
                  <p className="bg-white p-2 lg:p-4 text-sm lg:text-lg font-[Roboto_Mono]">
                    00
                  </p>
                </div>

                <div className="text-center ">
                  <span className="text-xs">Minutes</span>
                  <p className="bg-white p-2 lg:p-4 text-sm lg:text-lg font-[Roboto_Mono]">
                    01
                  </p>
                </div>

                <div className="text-center ">
                  <span className="text-xs">Seconds</span>
                  <p className="bg-white p-2 lg:p-4 text-sm lg:text-lg font-[Roboto_Mono]">
                    00
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 border-b-8 border-[#FD6259] rounded-br-lg w-[100px]"></div>
          </div>
        </div>
        <div className="lg:ml-1 hidden md:block ">
          <p className="text-white text-xs tracking-widest [writing-mode:vertical-rl] rotate-180">
            Slide for more draws
          </p>
        </div>
        <div className="text-black ml-1 lg:p-2 rounded-full hover:text-gray-200">
          <IoIosArrowDropright size={25} />
        </div>
      </div>

      {/* Right - Buttons */}
      <div className="flex gap-2 flex-row mt-3 md:1 md:mt-0">
        <div className="flex gap-2 flex-col">
          <button className="bg-gradient-to-r from-[#d3a94d] via-[#f3cd95] to-[#e4b956] border-2 border-black px-4 lg:px-8 py-2 lg:py-5 rounded-full lg:text-sm text-xs hover:bg-black  hover:bg-none hover:text-white transition">
            Pick Any 6 Numbers
          </button>
        </div>

        <div className="flex gap-2 lg:flex-col md:flex-col flex-row">
          <button className="bg-[#d29614] border-2 border-black px-4 lg:px-8 py-2 lg:py-5 rounded-full lg:text-sm  text-xs hover:bg-black">
            Prizes & Info
          </button>
          <button className="bg-[#d29614] border-2 border-black px-4 lg:px-8 py-2 lg:py-5 rounded-full lg:text-sm  text-xs hover:bg-black">
            Winners
          </button>
        </div>
      </div>
    </div>
  );
}
