import { useState } from "react";
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
      <button
        onClick={handlePrevPage}
        disabled={props.info.prev ? false : true}
      >
        ◀
      </button>
      <p>{props.numPage}</p>
      <button
        onClick={handleNextPage}
        disabled={props.info.next ? false : true}
      >
        ▶
      </button>
    </div>
  );
}
