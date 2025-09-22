import React from 'react';

export default function FooterTop() {
  return (
    <div className="relative bg-black border-t border-yellow-700 text-gray-400">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-6 px-4">
        <img
          src="/images/royal-mega.png"
          alt="Royal Mega Logo"
          className="h-8"
        />

        {/* Center Text */}
        <p className="text-sm text-center md:text-left">
          Lottery Players Can Play Royal Mega Lottery{' '}
          <br className="hidden md:block" />
          Games Online From Anywhere
        </p>

        {/* Right Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-yellow-500 transition">
            Terms &amp; Conditions
          </a>
          <a href="#" className="hover:text-yellow-500 transition">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Floating Dice Image */}
      <img
        src="/images/shape.png"
        alt="Dice"
        className="absolute -top-10 right-4 h-20 w-auto"
      />
    </div>
  );
}
