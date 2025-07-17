import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Crypto from "./pages/Crypto";
// import Crypto from "./pages/Crypto";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto/:cryptoId" element={<Crypto />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact/>}/> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
