import { useGetData } from "../../hooks/useGetData";
import { useState } from "react";
import style from "./Episodes.module.scss";

const URL_API = "https://rickandmortyapi.com/api/episode";
export function AllEpisodes() {
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
      <main className={style.main}>
        <h1>Episodes</h1>
        {data.results.map((episode: unknown) => {
          return (
            <div key={episode.id}>
              {episode.name}, {episode.episode}, {episode.air_date}
            </div>
          );
        })}
      </main>
    );
  }
}
