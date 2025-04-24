import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductPage from "./pages/Product";
import Cart from "./pages/Cart";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
