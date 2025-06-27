import React, { useContext, useState } from "react";
import { Coins, Search } from "lucide-react";
import { CryptoContext } from "../context/cryptoContext";

const Navbar = () => {
  const [input, setInput] = useState("");
  const [filteredCoins, setFilteredCoins] = useState([]);
  const { cryptolist = [], setSearchTerm } = useContext(CryptoContext);

  // To handle the form input

  const searchHandler = (event) => {
    event.preventDefault();

    // Updates the global searchTerm in the cyrptoContext with the current value of the
    // input field. This will likely trigger a re-render in other components that are listening
    // to searchTerm, causing them to filter.

    setSearchTerm(input);
  };

  const inputHandler = (event) => {
    // This function is called every time the user types into the search input field.
    const value = event.target.value;

    // Update the input state, which in turn update the displayed value in the input field
    setInput(value);

    // ? If the input field is empty, it clears the global search term "setSearchTerm("")" and hides any previous search suggestions
    if (value === "") {
      setSearchTerm("");
      setFilteredCoins([]);
    } else {
      // it filters the cryptolist (all cryptocurrencies) to find coin whose names include the typed value (case-insensitively).
      const suggestions = cryptolist.filter((coin) =>
        coin.name.toLowerCase().includes(value.toLowerCase())
      );
      console.log(suggestions);

      // it takes only the first 5 matching suggestions to keep the dropdown concise
      // Update the filteredCoins state, which will then render the suggestion list
      setFilteredCoins(suggestions.slice(0, 5));
    }
  };

  return (
    <nav className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 px-[5%] md:px-[8%] lg:px-[10%] py-5 bg-gray-900 backdrop-blur-md border-b border-gray-700/30 sticky top-0 z-50">
      <a
        href=""
        className="order-1 flex-shrink-0 flex items-center gap-2 hover:scale-105 transition-transform"
      >
        <Coins className="w-8 h-8 text-emerald-800" />
        <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          CryptoTracker
        </span>
      </a>

      {/* Search */}

      <form
        onSubmit={searchHandler}
        onChange={inputHandler}
        className="order-3 w-full md:order-2 md:w-auto flex-1 max-w-2xl mx-o md:mx-4 relative"
      >
        <div className="relative group">
          {/* // Gradient-background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/40 to-cyan-500/40 rounded-full opacity-30 group-hover:opacity-50 transition duration-300 pointer-events-none"></div>
          {/* // Input + Button */}
          <input
            type="text"
            placeholder="Search Crypto..."
            value={input}
            onChange={inputHandler}
            required
            className="relative w-full pr-12 pl-6 py-3 bg-gray-800/60 border border-gray-600/30 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500/50 placeholder-gray-400 text-gray-200 backdrop-blur-sm z-10"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-full hover:scale-105 transition-all">
            <Search className="w-4 h-4 pointer-events-none" />
          </button>
        </div>
        {filteredCoins.length > 0 && (
          <ul className="absolute w-full bg-gray-800/95 border border-gray-700 mt-2 rounded-lg shadow-xl z-10 backdrop-blur-md">
            {filteredCoins.map((coin, idx) => (
              <li key={idx} className="px-4 py-2 hover:bg-emerald-600/30 cursor-pointer text-gray-100"
                onClick={() => {setInput(coin.name);
                    // anytime you click the set form should be cleared.
                    setFilteredCoins([]);
                }}>
                  {coin.name}
              </li>
            ))}
          </ul>
        )}
      </form>
    </nav>
  );
};

export default Navbar;
