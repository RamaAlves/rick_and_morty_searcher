import style from "./Paginator.module.scss";

export function Paginator(props: any) {
  function handlePrevPage() {
    props.setUrl(props.info.prev);
    props.handleSetNumPage(props.numPage - 1);
  }
  function handleNextPage() {
    props.setUrl(props.info.next);
    props.handleSetNumPage(props.numPage + 1);
  }
  return (
    <div className={style.paginator}>
      <div className={style.card}>
        <button
          onClick={handlePrevPage}
          disabled={props.info.prev ? false : true}
        >
          Anterior
        </button>
        <p>{props.numPage}</p>
        <button
          onClick={handleNextPage}
          disabled={props.info.next ? false : true}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
