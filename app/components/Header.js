import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <header className="bg-black text-white border-b border-yellow-600">
      <div className="container max-w-auto space-y-6 py-18">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img
            src="./images/royal-mega.png"
            alt="Logo"
            className="h-10 object-contain"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:space-x-3 lg:space-x-6 text-sm font-medium">
            <a href="/" className="hover:text-yellow-500">
              HOME
            </a>
            <a href="/about" className="hover:text-yellow-500">
              ABOUT US
            </a>
            <a href="/contact" className="hover:text-yellow-500">
              CONTACT
            </a>
            <a href="/result" className="hover:text-yellow-500">
              RESULT
            </a>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {isLogin ? (
              <>
                {/* Profile */}
                <div className="flex items-center space-x-2">
                  <img
                    src="/images/user.png"
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm">Krishnapal Patel</span>
                </div>

                {/* Cart */}
                <Link to="/Addcart" className="relative">
                  <ShoppingBag size={22} />
                  <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-1.5 rounded-full">
                    2
                  </span>
                </Link>

                {/* Logout */}
                <button
                  onClick={() => setIsLogin(false)}
                  className="px-4 py-1 rounded-full bg-red-600 text-white font-medium hover:bg-red-500 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="px-4 py-1 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
                  Register
                </button>
                <button
                  className="px-4 py-1 rounded-full bg-yellow-500 text-black font-medium"
                  onClick={() => setIsLogin(true)}
                >
                  Log In
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-black border-t border-yellow-600">
            <nav className="flex flex-col space-y-2 p-4 text-sm font-medium">
              <a href="/" className="hover:text-yellow-500">
                HOME
              </a>
              <a href="/about" className="hover:text-yellow-500">
                ABOUT US
              </a>
              <a href="/contact" className="hover:text-yellow-500">
                CONTACT
              </a>
              <a href="/result" className="hover:text-yellow-500">
                RESULT
              </a>

              <div className="flex flex-col space-y-3 pt-4">
                {isLogin ? (
                  <>
                    <div className="flex items-center space-x-6">
                      <img
                        src="/images/user.png"
                        alt="User"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm">Krishnapal Patel</span>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
                      <ShoppingBag size={18} /> Cart
                    </button>
                    <button
                      onClick={() => setIsLogin(false)}
                      className="flex-1 px-4 py-2 rounded-full bg-red-600 text-white font-medium hover:bg-red-500 transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button className="flex-1 px-4 py-2 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
                      Register
                    </button>
                    <button
                      className="flex-1 px-4 py-2 rounded-full bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition"
                      onClick={() => setIsLogin(true)}
                    >
                      Log In
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
