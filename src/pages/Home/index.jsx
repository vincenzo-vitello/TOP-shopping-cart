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
    </>
  );
}
export default Home;
