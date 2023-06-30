import { Link } from "react-router-dom";
import style from "./Card.module.scss";
import { useGetData } from "../../hooks/useGetData";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
export function CharacterCard(props: any) {
  const [darkMode] = useContext(ThemeContext);
  if (props.url) {
    const { loading, error, data: character } = useGetData(props.url);
    if (loading) {
      return <p>cargando</p>;
    }
    if (error) {
      return <p>{error}</p>;
    }
    if (character) {
      return (
        <Link
          className={darkMode ? style.darkModeContainer : style.container}
          to={`/character/${character.id}`}
        >
          <img src={character.image} alt={`imagen de ${character.name}`} />
          <h4>Name: {character.name}</h4>
          <p>Specie: {character.species}</p>
        </Link>
      );
    }
  } else {
    return (
      <Link
        className={darkMode ? style.darkModeContainer : style.container}
        key={props.character.id}
        to={`/character/${props.character.id}`}
      >
        <img
          src={props.character.image}
          alt={`imagen de ${props.character.name}`}
        />
        <h4>Name: {props.character.name}</h4>
        <p>Specie: {props.character.species}</p>
      </Link>
    );
  }
}
