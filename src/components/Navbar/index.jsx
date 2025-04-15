import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/product/1">Product</Link>{" "}
          {/* TODO: creare routing dinamico prodotti */}
        </li>
      </ul>
    </nav>
  );
}
