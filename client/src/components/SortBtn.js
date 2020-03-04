import React from "react";

export default function SortBtn(props) {
  return (
    <button
      className="button"
      onClick={() => {
        props.sort(props.col);
      }}
    >
      sort
    </button>
  );
}
