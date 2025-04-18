import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import { useProducts } from "../../context/ContextProvider";
export default function Navbar() {
  const cart = useProducts();
  const cartCount = cart.cart.length;
  return (
    <nav>
      <p>UrbanEar</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart{" "}
            {cartCount > 0 && (
              <span className={style.cartCount}>[{cartCount}]</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
