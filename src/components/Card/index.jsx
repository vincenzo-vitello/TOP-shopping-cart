import style from "./Card.module.css";
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
  const isMobile = window.matchMedia(
    "(hover: none) and (pointer: coarse)"
  ).matches;

  return (
    <div className={style.card}>
      <div
        className={style.imageContainer}
        onClick={() => {
          if (isMobile) {
            window.location.href = linkTo;
          }
        }}
      >
        <Link
          to={linkTo}
          className={style.link}
          onClick={(e) => isMobile && e.preventDefault()}
        >
          <img src={images[0]} alt="" />
          {!isMobile && <button>Show Product</button>}
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
