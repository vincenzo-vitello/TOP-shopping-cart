import { useState, useEffect } from "react";

function Home() {
  const [homeData, setHomeData] = useState();

  useEffect(() => {
    fetch("/data/home.json")
      .then((res) => res.json())
      .then((data) => setHomeData(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(homeData);
  return <>Home</>;
}

export default Home;
