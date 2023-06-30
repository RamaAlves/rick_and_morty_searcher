import { useGetData } from "../../hooks/useGetData";
import { useLocation } from "react-router-dom";
import style from "./Locations.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const URL_API = "https://rickandmortyapi.com/api/location";
export function Location() {
  const [darkMode] = useContext(ThemeContext);
  const { state } = useLocation();
  const { loading, error, data: location } = useGetData(state.url ?? URL_API);
  /* console.log(location); */
  if (loading) {
    return (
      <main className={darkMode ? style.darkModeMain : style.main}>
        <h1>Cargando...</h1>;
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
          <>
            <p>name:{location.name}</p>
            <p>type:{location.type}</p>
            <p>dimension:{location.dimension}</p>
            <p>created:{location.created}</p>
          </>
        </div>
      </main>
    );
  }
}
