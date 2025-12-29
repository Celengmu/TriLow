import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Keranjang from "./pages/Keranjang";
import Checkout from "./pages/Checkout";
import Pembayaran from "./pages/Pembayaran";
import AppNavbar from "./components/AppNavbar";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/keranjang" element={<Keranjang />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
        </Routes>
        <AppNavbar />
      </BrowserRouter>
    </CartProvider>
  );
}