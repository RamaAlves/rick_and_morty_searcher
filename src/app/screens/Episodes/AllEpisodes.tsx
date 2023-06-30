import { useGetData } from "../../hooks/useGetData";
import { EpisodeSchema } from "../../interfaces/Interfaces";
import style from "./Episodes.module.scss";
import {EpisodeCard} from "../../components/Card/EpisodeCard"
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const URL_API = "https://rickandmortyapi.com/api/episode";
export function AllEpisodes() {
  const [darkMode] = useContext(ThemeContext);
  /* const [search, setSearch] = useState<string>(); */
  const { loading, error, data } = useGetData(URL_API);
  /* console.log(data); */
  if (loading) {
    return <h1>Cargando...</h1>;
  }
  if (error) {
    return (
      <>
        <h1>Error</h1>
        <p>descripcion:{error}</p>
      </>
    );
  }
  if (data) {
    return (
      <main className={darkMode ? style.darkModeMain : style.main}>
        <h1>Episodes</h1>
        {data.results.map((episode: EpisodeSchema) => {
          return <EpisodeCard key={episode.id} episode={episode} />;
        })}
      </main>
    );
  }
}
