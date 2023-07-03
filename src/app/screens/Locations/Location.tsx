import { useGetData } from "../../hooks/useGetData";
import { useLocation } from "react-router-dom";
import style from "./Location.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { DataSchema } from "../../interfaces/Interfaces";
import { Portal } from "../../components/Portal/Portal";

const URL_API = "https://rickandmortyapi.com/api/location";
export function Location() {
  const [darkMode] = useContext(ThemeContext);
  const { state } = useLocation();
  const { loading, error, data: location } = useGetData<DataSchema>(state.url ?? URL_API);
  /* console.log(location); */
  if (loading) {
    return (
      <main className={darkMode ? style.darkModeMain : style.main}>
        <Portal />
      </main>
    );
  }
  if (error) {
    return (
      <main className={darkMode ? style.darkModeMain : style.main}>
        <h1>Error</h1>
        <p>descripcion:{error}</p>
      </main>
    );
  }
  if (location) {
    return (
      <main className={darkMode ? style.darkModeMain : style.main}>
        <div className={style.card}>
          <p>Name: {location.name}</p>
          <p>Type: {location.type}</p>
          <p>Dimension: {location.dimension}</p>
          <p>Created: {location.created}</p>
        </div>
      </main>
    );
  }
}
