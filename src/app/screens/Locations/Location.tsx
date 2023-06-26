import { useGetData } from "../../hooks/useGetData";
import { useParams } from "react-router-dom";
import { useState } from "react";
import style from "./Locations.module.scss";

const URL_API = "https://rickandmortyapi.com/api/location";
export function Location() {
  const { id } = useParams();
  const { loading, error, data: location } = useGetData(URL_API + `/${id}`);
  /* console.log(location); */
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
  if (location) {
    return (
      <main className={style.main}>
        <h1>Location: {location.name}</h1>
        <div key={location.id}>
          {location.name}, {location.species},{location.id}
        </div>
      </main>
    );
  }
}
