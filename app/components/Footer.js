import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-yellow-700">
      <div className="relative bg-black border-b border-yellow-700 text-gray-400">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-6">
          <img
            src="/images/royal-mega.png"
            alt="Royal Mega Logo"
            className="h-8"
          />

          {/* Center Text */}
          <p className="text-sm text-center md:text-left">
            Lottery Players Can Play Royal Mega Lottery Games Online From
            Anywhere
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

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-6">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()}{' '}
          <span className="text-yellow-500 font-semibold">
            ROYAL MEGA LIMITED
          </span>
          . All Rights Reserved.
        </p>

        <div className="flex space-x-3">
          {[
            { icon: <FaFacebookF />, href: '#' },
            { icon: <FaTwitter />, href: '#' },
            { icon: <FaInstagram />, href: '#' },
            { icon: <FaWhatsapp />, href: '#' },
            { icon: <FaYoutube />, href: '#' },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="bg-gradient-to-b from-yellow-400 to-yellow-600 text-black p-2 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <ul className="flex space-x-6 text-sm">
          {['Home', 'About Us', 'Lotteries', 'Contact', 'Faq'].map(
            (link, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  {link}
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </footer>
  );
}
