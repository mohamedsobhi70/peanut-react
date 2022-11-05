import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Account from "./components/Account/Account";
import Bundles from "./components/Bundles/Bundles";
import Cart from "./components/Cart/Cart";
import Draws from "./components/Draws/Draws";
import Items from "./components/Items/Items";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Tickets from "./components/Tickets/Tickets";
import Notfound from "./components/Notfound/Notfound";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/bundles" element={<Bundles />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/draws" element={<Draws />} />
          <Route path="/items" element={<Items />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
