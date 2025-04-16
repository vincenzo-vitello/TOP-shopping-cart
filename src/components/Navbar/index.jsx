import { Link } from "react-router-dom";
import style from "./navbar.module.css";
export default function Navbar() {
  let cartCount = 1;
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
