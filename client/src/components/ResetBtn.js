import React from "react";

export default function ResetBtn(props) {
  return (
    <button
      className="btn btn-secondary mx-2"
      onClick={() => {
        props.reset();
      }}
    >
      reset page
    </button>
  );
}
