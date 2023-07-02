import { useGetData } from "../../hooks/useGetData";
import { useParams } from "react-router-dom";
import { CharacterCard } from "../../components/Card/CharacterCard";
import style from "./Episode.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { EpisodeSchema } from "../../interfaces/Interfaces";

const URL_API = "https://rickandmortyapi.com/api/episode";
export function Episode() {
  const [darkMode] = useContext(ThemeContext);
  const { id } = useParams();
  const {
    loading,
    error,
    data: episode,
  } = useGetData<EpisodeSchema>(URL_API + `/${id}`);
  /* console.log(episode); */
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
        <p>descripcion: {error}</p>
      </main>
    );
  }
  if (episode) {
    return (
      <main className={darkMode ? style.darkModeMain : style.main}>
        <div className={style.card}>
          <p className={style.description}>Name: {episode.name}</p>
          <p className={style.description}>Episode: {episode.episode}</p>
          <h2>Los personajes que aparecen en este episodio son:</h2>
          <div className={style.carrousel}>
            {episode.characters.map((character: string) => {
              return <CharacterCard key={character} url={character} />;
            })}
          </div>
        </div>
      </main>
    );
  }
}
