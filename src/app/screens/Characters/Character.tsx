import { useGetData } from "../../hooks/useGetData";
import { Link, useParams } from "react-router-dom";
import style from "./Characters.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CharacterSchema } from "../../interfaces/Interfaces";
import { Portal } from "../../components/Portal/Portal";

const URL_API = "https://rickandmortyapi.com/api/character";
export function Character() {
  const [darkMode] = useContext(ThemeContext);
  const { id } = useParams();
  const { loading, error, data: character } = useGetData<CharacterSchema>(URL_API + `/${id}`);
  /* console.log(character); */
  if (loading) {
    return (
      <main className={darkMode ? style.darkModeMain : style.main}>
        <Portal/>
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
  if (character) {
    /* const url = character.origin.url.replaceAll('/',' ') */
    return (
      <main className={darkMode ? style.darkModeMain : style.main}>
        <div className={style.card}>
          <img src={character.image} alt={`imagen de ` + character.name} />
          <div className={style.info} key={character.id}>
            <p>id: {character.id}</p>
            <p>name: {character.name}</p>
            <p>status: {character.status}</p>
            <p>species: {character.name}</p>
            <p>type: {character.type}</p>
            <p>gender: {character.gender}</p>

            {character.origin.url.length > 1 ? (
              <p>
                origin:
                <Link
                  to={`/location/details`}
                  state={{ url: character.origin.url }}
                >
                  {character.origin.name}
                </Link>
              </p>
            ) : (
              <p>origin: {character.origin.name}</p>
            )}
          </div>
        </div>
      </main>
    );
  }
}
