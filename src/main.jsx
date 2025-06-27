import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import CryptoContextProvider from "./context/cryptoContext.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <CryptoContextProvider>
    <App />
  </CryptoContextProvider>
  </BrowserRouter>
);
