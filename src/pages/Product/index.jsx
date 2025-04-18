import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ContextProvider";
import { useState } from "react";
import style from "./product.module.css";

function ProductPage() {
  const { id } = useParams();
  const { products, addToCart } = useProducts();
  const product = products.find((product) => product.id == id);

  if (!product) {
    return (
      <div>
        <p>Product not found</p>
      </div>
    );
  }

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className={style.productPage}>
      <div className={style.productGrid}>
        <div className={style.mainImage}>
          <img src={mainImage} alt={product.name} />
        </div>

        <div className={style.productInfo}>
          <div className={style.headerRow}>
            <h1>{product.name}</h1>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
          <p>{product.longDescription}</p>
          <p className={style.price}>{product.price}€</p>
        </div>

        <div className={style.extraImages}>
          {product.images.map((img, index) => (
            <div
              key={index}
              className={`${style.imageWrapper} ${
                mainImage === img ? style.active : ""
              }`}
              onClick={() => setMainImage(img)}
            >
              <img src={img} alt={`${product.name} ${index}`} />
              <div className={style.overlay}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
