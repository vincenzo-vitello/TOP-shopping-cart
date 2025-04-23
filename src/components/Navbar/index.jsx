import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./navbar.module.css";
import { useProducts } from "../../context/ContextProvider";

export default function Navbar() {
  const cart = useProducts();
  const cartCount = cart.cart.length;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={style.navbar}>
        <p>UrbanEar</p>

        <ul className={`${style.navLinks} ${menuOpen ? style.open : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              Cart{" "}
              {cartCount > 0 && (
                <span className={style.cartCount}>[{cartCount}]</span>
              )}
            </Link>
          </li>
        </ul>

        {/* Bottone hamburger solo mobile */}
        <button
          className={style.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={style.burgerLine}></span>
          <span className={style.burgerLine}></span>
          <span className={style.burgerLine}></span>
        </button>
      </nav>

      {/* Overlay attivo solo con menu mobile */}
      {menuOpen && (
        <div className={style.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
