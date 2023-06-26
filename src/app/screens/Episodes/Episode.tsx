import { useGetData } from "../../hooks/useGetData";
import { useParams } from "react-router-dom";
import { useState } from "react";
import style from "./Episodes.module.scss";

const URL_API = "https://rickandmortyapi.com/api/episode";
export function Episode() {
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
        <p>descripcion:{error}</p>
      </>
    );
  }
  if (episode) {
    return (
      <main className={style.main}>
        <h1>Episode: {episode.name}</h1>
        <div key={episode.id}>
          {episode.name}, {episode.species},{episode.id}
        </div>
      </main>
    );
  }
}
