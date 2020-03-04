import React from "react";

export default function Filter(props) {
  return (
    <div className="row">
      <form onSubmit={props.handleSubmit}>
        <label>
          <input
            type="text"
            name="department"
            placeholder="search department"
            value={props.department}
            onChange={props.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
