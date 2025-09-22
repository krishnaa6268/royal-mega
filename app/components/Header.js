import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <header className="bg-black text-white border-b border-yellow-600">
      <div className="container ">
        <div className="">
          <div className="flex justify-between items-center h-16">
            <img
              src="./images/royal-mega.png"
              alt="Logo"
              className="h-10 object-contain"
            />

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

            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-1 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
                Register
              </button>
              <button
                className="px-4 py-1 rounded-full bg-yellow-500 text-black font-medium"
                onClick={() => {
                  setIsLogin(!isLogin);
                  console.log(isLogin);
                }}
              >
                Log In
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

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
                <button className="flex-1 px-4 py-2 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
                  Register
                </button>
                <button className="flex-1 px-4 py-2 rounded-full bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition">
                  Log In
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
