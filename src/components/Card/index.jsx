import style from "./card.module.css";
import { Link } from "react-router-dom";
export default function Card({
  name,
  brand,
  price,
  images = [],
  description,
  linkTo,
  addToCart,
}) {
  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <Link to={linkTo} className={style.link}>
          <img src={images[0]} alt="" />
          <button>Show Product</button>
        </Link>
      </div>
      <div className={style.content}>
        <div className={style.productName}>{name}</div>
        <div className={style.productBrand}>{brand}</div>
        <div className={style.productDescription}>{description}</div>
        <div className={style.cta}>
          <button onClick={addToCart}>Add to cart</button>
          <p className={style.productPrice}>${price}</p>
        </div>
      </div>
    </div>
  );
}
