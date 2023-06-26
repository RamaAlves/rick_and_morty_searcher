import { useGetData } from "../../hooks/useGetData";
import { useParams } from "react-router-dom";
import { useState } from "react";
import style from "./Characters.module.scss";

const URL_API = "https://rickandmortyapi.com/api/character";
export function Character() {
  const { id } = useParams();
  const { loading, error, data: character } = useGetData(URL_API + `/${id}`);
  /* console.log(character); */
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
  if (character) {
    return (
      <main className={style.main}>
        <h1>Character: {character.name}</h1>
        <div key={character.id}>
          {character.name}, {character.species},{character.id}
        </div>
      </main>
    );
  }
}
