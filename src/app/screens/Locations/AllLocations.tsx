import { useGetData } from "../../hooks/useGetData";
import { useState, useEffect } from "react";
import style from "./Locations.module.scss";

const URL_API = "https://rickandmortyapi.com/api/location";
export function AllLocations() {
  const [urlRequest, setUrlRequest] = useState<string>(URL_API);
  /* const [search, setSearch] = useState<string>(); */

  const { loading, error, data } = useGetData(urlRequest);
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
        <h1>Locations</h1>
        {data.results.map((location: unknown) => {
          return (
            <div key={location.id}>
              {location.name}, {location.type}, {location.dimension}
            </div>
          );
        })}
      </main>
    );
  }
}
