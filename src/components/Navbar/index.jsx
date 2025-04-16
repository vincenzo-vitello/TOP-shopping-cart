import { Link } from "react-router-dom";
import "./navbar.module.css";
export default function Navbar() {
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
          <Link to="/cart">Cart</Link>{" "}
        </li>
      </ul>
    </nav>
  );
}
