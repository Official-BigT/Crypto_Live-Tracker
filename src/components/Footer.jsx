import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-xl rounded-xl py-6 border-t border-emerald-500/20">
      <div className="px-[5%] md:px-[8%] lg:px-[10%]">
        <p className="text-center text-sm md:text-base text-gray-300-hover:text-cyan-400/90 transition-colors duration-300">
          <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 font-bold bg-clip-text text-transparent text-lg">
            &copy; 2025 CryptoTracker
          </span>
          . All rights reserved, market data sourced from &nbsp;
          <a
            href="https://www.coingecko.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline"
          >
            CoinGecko API
          </a>
        </p>
        <p className="text-center text-xs md:text-sm text-gray-400 mt-2">
          Made with ❤️ by Official Big T
          <br />
          &middot; 🧱Brick Red Wraiths Devs©️
        </p>
      </div>
    </div>
  );
};

export default Footer;
