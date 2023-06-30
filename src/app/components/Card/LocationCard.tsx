import { Link } from "react-router-dom";
import { LocationSchema } from "../../interfaces/Interfaces";
import style from "./Card.module.scss";

type Props = {
  location:LocationSchema
}

export function LocationCard(props: Props) {
  return (
    <Link to={`/location/details`} state={{ url: props.location.url }}>
      <div className={style.card}>
        <h4>{props.location.name}</h4>
        <p>{props.location.type}</p>
        <p>{props.location.dimension}</p>
      </div>
    </Link>
  );
}
