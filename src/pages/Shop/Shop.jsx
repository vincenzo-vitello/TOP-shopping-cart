import { useState, useEffect } from "react";
import Card from "../../components/Card";
import style from "./shop.module.css";
import heroImage from "../../assets/shop_bg_2.webp";
function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={style.shopContainer}>
        <p className={style.catalogTitle}>
          <span>Our</span> <span>Catalog</span>
        </p>
        <img src={heroImage} alt="" className={style.heroImage} />
      </div>
      <div className={style.shopContent}>
        {products &&
          products.map((product) => {
            return (
              <Card
                key={product.id}
                name={product.name}
                images={product.images}
                brand={product.brand}
                price={product.price}
                category={product.category}
                linkTo={`/product/${product.id}`}
                addToCart={() => {
                  console.log("add to cart");
                }}
              />
            );
          })}
      </div>
    </>
  );
}

export default Shop;
