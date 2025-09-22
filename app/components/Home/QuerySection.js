import React from 'react';

export default function QuerySection() {
  return (
    <section className=" bg-gradient-to-r from-[#D4AC54] to-[#E3BA5D] bg-opacity-90 py-12 mb-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:px-4">
          <h2 className="lg:text-[32px] font-semibold font-poppins leading-[56px] tracking-[0.92px] align-middle text-black text-center md:text-left sm:text-[30px]">
            If you have any query about the Platform!
          </h2>
          <button className="px-8 py-4 border lg:text-[26px] sm:text-[20px] md:text-[24px] border-black  text-black rounded-full hover:bg-[#f5be3e] shadow-md transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
