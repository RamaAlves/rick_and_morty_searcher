import { Link } from "react-router-dom";
import { EpisodeSchema } from "../../interfaces/Interfaces";
import style from "./Card.module.scss";
export function EpisodeCard(props: any) {
  return (
    <Link className={style.container} to={`/episode/${props.episode.id}`}>
      
        <h4>Name: {props.episode.name}</h4>
        <p>Episode: {props.episode.episode}</p>
      
    </Link>
  );
}
