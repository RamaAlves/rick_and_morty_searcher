import { useGetData } from "../../hooks/useGetData";
import { useState } from "react";
import style from "./Home.module.scss";

const URL_API = "https://rickandmortyapi.com/api/character";
export function Home() {
  const [search, setSearch] = useState<string>();
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
    <main className={style.main}>
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
      {loading && <h1>Cargando...</h1>}
      {error && (
        <>
          <h1>Error</h1>
          <p>descripcion:{error}</p>
        </>
      )}
      {data &&
        data.results.map((character) => {
          return (
            <div key={character.id}>
              {character.name}, {character.species},{character.id}
            </div>
          );
        })}
    </main>
  );
}
/* } */
