import { useContext, useState } from "react";
import { CryptoContext } from "../context/cryptoContext";
import { ChevronDown } from "lucide-react";

const CoinArea = () => {
  const [isCurrencyDropDownOpen, setIsCurrencyDropOpen] = useState(false);
  const [filteredCryptos, currentCurrency, setCurrentCurrency] =
  useContext(CryptoContext);

  // To handle the symbol being chosen
  const handleCurrencySelect = (selectedCurrency) => {
    switch (selectedCurrency) {
      case "usd":
        setCurrentCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrentCurrency({ name: "eur", symbol: "€" });
        break;
      case "ngn":
        setCurrentCurrency({ name: "ngn", symbol: "₦" });
        break;
      default:
        setCurrentCurrency({ name: "usd", symbol: "$" });
    }

    setIsCurrencyDropOpen(false);
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900 text-white px-4 sm:px-5 py-6 md:py-10 relative z-0">
        {/* Hero Section */}

        <div className="text-center mb-8 md:mb-12 space-y-4 group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-3xl opacity-30 animate-pulse-slow"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from bg-emerald-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent animate-gradient-x leading-tight">
            Crypto <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-cyan-400 to bg-emerald-400 bg-clip-text text-transparent">
              Market Intelligence
            </span>
          </h1>
          <p className="text-gray-300/40 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mt-7-4">
            Track real-time crypto market metrics with advanced analytics and
            &nbsp;
            <span className="bg-gradient-to-r from-emerald-400/80 to-cyan-400/80 bg-clip-text text-transparent">
              neural network predictions
            </span>
          </p>
        </div>

        {/* Task Header */}
        <div className="hidden md:grid grid-col-5 gap-4 text-sm py-4 mb-2 bg-gray-800/40 backdrop-blur-lg rounded-xl border border-emerald-500/20">
          <p className="text-emerald-400/90">Ranks</p>
          <p className="text-emerald-400/90">Coins</p>
          <div
            className="relative flex items-center gap-1 cursor-pointer group"
            onClick={() => setIsCurrencyDropOpen(!isCurrencyDropDownOpen)}
          >
            <span>Price</span>
            <div className="flex item-center gap-1">
              <span className="text-emerald-400/90">
                {currentCurrency.symbol}
              </span>

              <ChevronDown
                className={`w-4 h-4 text-cyan-400/80 transition-transform ${
                  isCurrencyDropDownOpen ? "rotate-180" : ""
                } `}
              />
            </div>
          </div>
          <p className="text-center">24H Flux</p>
          <p className="text-center">Market Cap</p>
        </div>
      </div>
    </>
  );
};

export default CoinArea;
