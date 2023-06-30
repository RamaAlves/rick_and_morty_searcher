import { useGetData } from "../../hooks/useGetData";
import { useParams } from "react-router-dom";
import { CharacterCard } from "../../components/Card/CharacterCard";
import style from "./Episodes.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const URL_API = "https://rickandmortyapi.com/api/episode";
export function Episode() {
  const [darkMode] = useContext(ThemeContext);
  const { id } = useParams();
  const { loading, error, data: episode } = useGetData(URL_API + `/${id}`);
  /* console.log(episode); */
  if (loading) {
    return <h1>Cargando...</h1>;
  }
  if (error) {
    return (
      <>
        <h1>Error</h1>
        <p>descripcion: {error}</p>
      </>
    );
  }
  if (episode) {
    return (
      <main className={darkMode ? style.darkModeMain : style.main}>
        <div className={style.card}>
          <p>Name: {episode.name}</p>
          <p>Episode: {episode.episode}</p>
        </div>
        <h4>Los personajes que aparecen en este episodio son:</h4>
        <div className={style.carrousel}>
          {episode.characters.map((character: string) => {
            return <CharacterCard url={character} />;
          })}
        </div>
      </main>
    );
  }
}
