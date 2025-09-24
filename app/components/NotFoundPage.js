import React from 'react';
// import pnf from "../images/pnf.png"

const NotFoundPage = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen text-center text-white"
      style={{
        backgroundImage: 'url("/images/pnf.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl p-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          OOPS! THIS PAGE NOT FOUND
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We are Really Sorry But the Page you Requested is Missing ☹️
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
        >
          GO BACK TO HOME »
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
