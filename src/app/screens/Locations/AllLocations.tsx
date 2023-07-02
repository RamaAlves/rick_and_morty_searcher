import { useGetData } from "../../hooks/useGetData";
import { useState, useContext } from "react";
import style from "./AllLocations.module.scss";
import { LocationCard } from "../../components/Card/LocationCard";
import { LocationSchema } from "../../interfaces/Interfaces";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Paginator } from "../../components/interface/Paginator";
import { Portal } from "../../components/Portal/Portal";

const URL_API = "https://rickandmortyapi.com/api/location";
export function AllLocations() {
  const [darkMode] = useContext(ThemeContext);
  const [numPage, setNumPage] = useState<number>(1);
  const [urlRequest, setUrlRequest] = useState<string>(URL_API);
  /* const [search, setSearch] = useState<string>(); */

  const { loading, error, data } = useGetData<LocationSchema>(urlRequest ?? URL_API);
  /* console.log(data); */
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
        <p>descripcion: {error}</p>
      </main>
    );
  }
  if (data) {
    return (
      <main className={darkMode ? style.darkModeMain : style.main}>
        <h1>Locations</h1>
        <article className={style.article}>
          {data.results.map((location: LocationSchema) => {
            return <LocationCard key={location.id} location={location} />;
          })}
        </article>
        <Paginator
          numPage={numPage}
          handleSetNumPage={setNumPage}
          info={data.info}
          setUrl={setUrlRequest}
        />
      </main>
    );
  }
}
