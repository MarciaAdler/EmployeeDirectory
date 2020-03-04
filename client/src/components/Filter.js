import React from "react";

export default function Filter(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        <input
          type="text"
          name="department"
          value={props.department}
          onChange={props.handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
