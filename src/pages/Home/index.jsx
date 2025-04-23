import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./home.module.css";

function Home() {
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    fetch("/data/home.json")
      .then((res) => res.json())
      .then((data) => setHomeData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!homeData.hero) return <div>Loading...</div>;
  console.log(homeData);
  return (
    <>
      <header className={style.hero}>
        <div className={style.heroContent}>
          <h1>{homeData.hero.headline}</h1>
          <p>{homeData.hero.subheadline}</p>
          <Link className={style.cta} to={"../Shop"}>
            {homeData.hero.ctaText}
          </Link>
        </div>
        <div className={style.heroBackground}>
          <img src={homeData.hero.backgroundImage} alt="" />
        </div>
      </header>
      <section className={style.featuredProduct}>
        <h2>{homeData.featuredProduct.title}</h2>
        <div className={style.featuredProductContainer}>
          <div className={style.imageWrapper}>
            <span className={style.label}>
              {homeData.featuredProduct.label}
            </span>
            <img src={homeData.featuredProduct.image} alt="" />
          </div>
          <div className={style.productInfo}>
            <p>{homeData.featuredProduct.description}</p>
            <Link className={style.cta} to={homeData.featuredProduct.link}>
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      <section className={style.benefits}>
        <h2>{homeData.benefits.headline}</h2>
        <div className={style.benefitsContainer}>
          {homeData.benefits.map((benefit, index) => {
            return (
              <div key={index} className={style.benefit}>
                <img src={benefit.icon} alt="" />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default Home;
