// App.jsx
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VendorPage from "./pages/VendorPages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
// import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<VendorPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/auth" element={<AuthP />} /> */}
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
