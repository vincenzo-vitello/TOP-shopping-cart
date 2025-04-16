import { Link } from "react-router-dom";
import style from "./footer.module.css";
export default function Footer() {
  return (
    <footer>
      <p>UrbanEar</p>
      <p>
        UrbanEar© is a fictitious brand created for study purposes only, hope
        you like the site!
      </p>
      <p>
        Created with love by{" "}
        <a href="https://www.linkedin.com/in/vincenzo-vitello-25a963235/">
          Vincenzo Vitello
        </a>
      </p>
    </footer>
  );
}
