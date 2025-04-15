import { useState, useEffect } from "react";
import Card from "../../components/Card";
import style from "./shop.module.css";
import heroImage from "../../assets/hero_no_bg.png";
function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={style.shopContainer}>
      <img src={heroImage} alt="" className={style.heroImage} />
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
            />
          );
        })}
    </div>
  );
}

export default Shop;
