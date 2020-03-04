import React from "react";

export default function SortBtn(props) {
  return (
    <button
      className="btn btn-info mx-2"
      onClick={() => {
        props.sort(props.col);
      }}
    >
      sort
    </button>
  );
}
