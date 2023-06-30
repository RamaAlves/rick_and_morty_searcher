import { useGetData } from "../../hooks/useGetData";
import { CharacterSchema } from "../../interfaces/Interfaces";
import { useState, useContext } from "react";
import style from "./Home.module.scss";
import { CharacterCard } from "../../components/Card/CharacterCard";
import { ThemeContext } from "../../contexts/ThemeContext";

const URL_API = "https://rickandmortyapi.com/api/character";
export function Home() {
  const [darkMode] = useContext(ThemeContext);
  const [search, setSearch] = useState<string>("Rick");
  const [urlRequest, setUrlRequest] = useState<string>(URL_API);
  const { loading, error, data } = useGetData(urlRequest);
  /* console.log(data); */
  function updateUrlRequest() {
    setUrlRequest(URL_API + "/?name=" + search);
  }

  /* if (loading) {
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
  if (data) { */
  return (
    <main className={darkMode ? style.darkModeMain : style.main}>
      <h1>Rick y Morty Searcher</h1>
      <form>
        <input
          type="text"
          placeholder="Rick"
          onChange={(e) => {
            setSearch(e.target.value);
            updateUrlRequest();
          }}
          value={search}
        />
      </form>
      <article className={style.article}>
        {loading && <h1>Cargando...</h1>}
        {error && (
          <>
            <h1>Error</h1>
            <p>description:{error}</p>
          </>
        )}
        {data &&
          data.results.map((character: CharacterSchema) => {
            return <CharacterCard key={character.id} character={character} />;
          })}
      </article>
    </main>
  );
}
/* } */
