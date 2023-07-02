import style from "./Portal.module.scss";

export function Portal() {
  return (
    <div className={style.container}>
      <img
        className={style.portal}
        src="/img/portal-rick-and-morty.gif"
        alt="portal"
      />
    </div>
  );
}
