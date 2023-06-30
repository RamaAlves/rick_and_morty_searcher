import { Link } from "react-router-dom";
import { LocationSchema } from "../../interfaces/Interfaces";
import style from "./Card.module.scss";

type Props = {
  location: LocationSchema;
};

export function LocationCard(props: Props) {
  return (
    <Link
      className={style.container}
      to={`/location/details`}
      state={{ url: props.location.url }}
    >
      <h4>Name: {props.location.name}</h4>
      <p>Type: {props.location.type}</p>
      <p>Dimension: {props.location.dimension}</p>
    </Link>
  );
}
