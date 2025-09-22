import React from 'react';

export default function BingoSection() {
  return (
    <section
      className=" bg-[#90722b] mb-[80px] mt-[70px] flex justify-center items-center"
      // style={{
      //   backgroundImage: 'url("/images/bingo-section.png")',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      <div className="">
        <img
          src="/images/bingo-section.png"
          alt="Bingo Icon"
          className="w-auto h-[100%]"
        />
      </div>
    </section>
  );
}
