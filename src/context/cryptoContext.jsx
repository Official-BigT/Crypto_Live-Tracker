import { createContext, useEffect, useState } from "react";

export const CryptoContext = createContext();

const CryptoContextProvider = (props) => {
  // Raw array from Coingeko for the selected crypto
  const [cryptolist, setCryptolist] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);

  // To search the input field for the particular coin e.g BTC or ETH 
  const [searchTerm, setSearchTerm] = useState("");

  // OBJECT TO DESCRIBE FIAT CURRENCY YOU'RE PRICING COINS IN, CHANGING TRIGGERS A DATA REFETCH
  const [currentCurrency, setCurrentCurrency] = useState({
    name: "usd",
    symbol: "$",
  });
  
  
  const fetchCryptoData = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-kDYB5Vie6YM2VC8BZvKf4xgf",
    },
  };

  //   The try and catch is a substitute (if and else statement)
  try {
    const res = await fetch(
      //Calls the API
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currentCurrency.name}`, options
    );
    // Coverts the scattered the a collated JSON javascript object with an API method
    //if data is successful, it parses the JSON response and updates the
    // cryptolist state with the setCryptolist(data) function
    const data = await res.json();
    setCryptolist(data);
  } catch (error) {
    console.log("Failed to fetch crypto data: ", erroe);
  }
};

// Refetch when currency changes and useEffect is the best appraoch
// For anytime the current currency array dependency is changed it
// will impact an effect to change the currency to whatever the user switches/ changes to.
useEffect(() => {
  fetchCryptoData();
}, [currentCurrency]); //it also runs once when the component mounts for the first time to fetch initial data.


// Search functionality
// Whenever the search term changes, it filters the cryptolist to only include cryptos that match.
useEffect(() => {
  if (searchTerm.trim() === "") {
    setFilteredCryptos(cryptolist);
  } else {
    setFilteredCryptos(
      cryptolist.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }
}, [cryptolist, searchTerm]);


const contextValue = {
  cryptolist,
  filteredCryptos,
  currentCurrency,
  setCurrentCurrency,
  searchTerm,
  setSearchTerm
};

return (
  <>
    <CryptoContext.Provider value={contextValue}>
      {props.children}
    </CryptoContext.Provider>
  </>
);

};

export default CryptoContextProvider;