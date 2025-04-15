import style from "./card.module.css";
import { Link } from "react-router-dom";
export default function Card({
  name,
  brand,
  price,
  category,
  images = [],
  description,
  longDescription,
  linkTo,
}) {
  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <img src={images[0]} alt="" />
      </div>
      <div className={style.productName}>{name}</div>
      <div className={style.productBrand}>{brand}</div>
      <div className={style.productDescription}>{description}</div>
      <p className={style.productPrice}>{price}</p>
      <Link to={linkTo}>
        <button>Show Product</button>
      </Link>
    </div>
  );
}
