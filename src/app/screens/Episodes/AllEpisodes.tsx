import { useGetData } from "../../hooks/useGetData";
import { EpisodeSchema } from "../../interfaces/Interfaces";
import style from "./Episodes.module.scss";
import { EpisodeCard } from "../../components/Card/EpisodeCard";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Paginator } from "../../components/interface/Paginator";

const URL_API = "https://rickandmortyapi.com/api/episode";
export function AllEpisodes() {
  const [darkMode] = useContext(ThemeContext);
  const [numPage, setNumPage] = useState<number>(1);
  /* const [search, setSearch] = useState<string>(); */
  const [urlRequest, setUrlRequest] = useState<string>(URL_API);
  const { loading, error, data } = useGetData(urlRequest ?? URL_API);
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
        <h1>Episodes</h1>
        {data.results.map((episode: EpisodeSchema) => {
          return <EpisodeCard key={episode.id} episode={episode} />;
        })}
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
