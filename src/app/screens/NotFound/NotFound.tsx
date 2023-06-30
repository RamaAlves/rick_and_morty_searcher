import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import style from "./NotFound.module.scss"

export function NotFound() {
  const [darkMode] = useContext(ThemeContext);
  const {url} = useParams()
  console.log(url)
  return (
    <main className={darkMode ? style.darkModeMain : style.main}>
      <h1>404 !!!</h1>
      <p>Esta página no existe</p>
      <Link to="/">Volver al home</Link>
    </main>
  );
}
