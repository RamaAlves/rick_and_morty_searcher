
import { Link } from 'react-router-dom'
import style from "./Card.module.scss";
import { useGetData } from "../../hooks/useGetData";
export function CharacterCard(props: any) {
  if (props.url) {
    const { loading, error, data: character } = useGetData(props.url);
    if (loading) {
      return <p>cargando</p>
    }
    if (error) {
      return <p>{ error }</p>
    }
    if (character) {
      return (
        <Link key={character.id} to={`/character/${character.id}`}>
          <div className={style.container}>
            <img
              src={character.image}
              alt={`imagen de ${character.name}`}
            />
            <h4>{character.name}</h4>
            <p>{character.species}</p>
          </div>
        </Link>
      );
    }
  }
  else {
    
    return (
      <Link to={`/character/${props.character.id}`}>
        <div className={style.container}>
          <img
            src={props.character.image}
            alt={`imagen de ${props.character.name}`}
          />
          <h4>{props.character.name}</h4>
          <p>{props.character.species}</p>
        </div>
      </Link>
    );
  }
}
