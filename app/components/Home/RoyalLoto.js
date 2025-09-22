import React, { useState } from 'react';
import LotteryHeader from './LotteryHeader';
import MainBallSelector from './MainBallSelector';
import MegaBallSelector from './MegaBallSelector';
import SelectionSummary from './SelectionSummary';

export default function RoyalLoto() {
  const [mainBalls, setMainBalls] = useState(
    Array.from({ length: 69 }, (_, i) => ({
      label: String(i + 1).padStart(2, '0'),
      selected: false,
    })),
  );
  const [megaBalls, setMegaBalls] = useState(
    Array.from({ length: 26 }, (_, i) => ({
      label: String(i + 1).padStart(2, '0'),
      selected: false,
    })),
  );

  const toggleMain = (num) => {
    setMainBalls((prev) =>
      prev.map((n) =>
        n.label === num.label ? { ...n, selected: !n.selected } : n,
      ),
    );
  };

  const toggleMega = (num) => {
    setMegaBalls((prev) =>
      prev.map((n) => {
        if (n.label === num.label) return { ...n, selected: !n.selected };
        return { ...n, selected: false }; // Deselect others
      }),
    );
  };

  const selectedMain = mainBalls.filter((n) => n.selected).map((n) => n.label);
  const selectedMega = megaBalls.find((n) => n.selected)?.label || null;

  const clearSelection = () => {
    setMainBalls((prev) => prev.map((n) => ({ ...n, selected: false })));
    setMegaBalls((prev) => prev.map((n) => ({ ...n, selected: false })));
  };

  const autoSelect = () => {
    clearSelection();
    // Randomly select 5 unique main balls
    const mainIndexes = [];
    while (mainIndexes.length < 5) {
      const idx = Math.floor(Math.random() * mainBalls.length);
      if (!mainIndexes.includes(idx)) mainIndexes.push(idx);
    }
    setMainBalls((prev) =>
      prev.map((n, i) =>
        mainIndexes.includes(i) ? { ...n, selected: true } : n,
      ),
    );

    // Randomly select 1 mega ball
    const megaIdx = Math.floor(Math.random() * megaBalls.length);
    setMegaBalls((prev) =>
      prev.map((n, i) => (i === megaIdx ? { ...n, selected: true } : n)),
    );
  };

  return (
    <div className="relative z-50 rounded-lg shadow">
      <img
        src="/images/ball-1.png"
        alt="Main Balls"
        className="h-12 w-12 absolute left-0 top-0 z-10 hidden md:block"
      />
      <img
        src="/images/ball-2.png"
        alt="Main Balls"
        className="h-16 w-16 absolute left-12 top-10 z-10 hidden md:block"
      />

      <img
        src="/images/ball-1.png"
        alt="Main Balls"
        className="h-12 w-12 absolute right-0 bottom-0 z-10 hidden md:block"
      />
      <img
        src="/images/ball-2.png"
        alt="Main Balls"
        className="h-16 w-16 absolute right-12 bottom-10 z-10 hidden md:block"
      />

      <img
        src="/images/net-bg.png"
        alt="Main Balls"
        className="absolute right-0 top-0 z-1 hidden md:block"
      />

      <img
        src="/images/net-bg.png"
        alt="Main Balls"
        className="absolute left-0 bottom-0 z-1 hidden md:block"
      />

      <div className="container max-w-auto space-y-6 py-18">
        <h2 className="lg:text-5xl text-3xl font-bold pt-8 lg:py-8  text-center bg-gradient-to-r from-[#e0b351] via-[#fdd9a4] to-[#e7bb55] bg-clip-text text-transparent">
          Royal Lotto
        </h2>

        <LotteryHeader />
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 mx-auto grid sm:grid-cols-2 md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr] gap-10 text-black mt-6 mb-6 items-stretch">
            <MainBallSelector numbers={mainBalls} onSelect={toggleMain} />
            <MegaBallSelector numbers={megaBalls} onSelect={toggleMega} />
          </div>
          <SelectionSummary
            selectedMain={selectedMain}
            selectedMega={selectedMega}
            onClear={clearSelection}
            onAutoSelect={autoSelect}
          />
        </div>
      </div>
    </div>
  );
}
