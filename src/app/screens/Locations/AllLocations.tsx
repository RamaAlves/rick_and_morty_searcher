import { useGetData } from "../../hooks/useGetData";
import { useState, useEffect, useContext } from "react";
import style from "./Locations.module.scss";
import { LocationCard } from "../../components/Card/LocationCard";
import { LocationSchema } from "../../interfaces/Interfaces";
import { ThemeContext } from "../../contexts/ThemeContext";

const URL_API = "https://rickandmortyapi.com/api/location";
export function AllLocations() {
  const [darkMode] = useContext(ThemeContext);
  const [urlRequest, setUrlRequest] = useState<string>(URL_API);
  /* const [search, setSearch] = useState<string>(); */

  const { loading, error, data } = useGetData(urlRequest);
  /* console.log(data); */
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
  if (data) {
    return (
      <main className={darkMode ? style.darkModeMain : style.main}>
        <h1>Locations</h1>
        {data.results.map((location: LocationSchema) => {
          console.log(location);
          return <LocationCard key={location.id} location={location} />;
        })}
      </main>
    );
  }
}
