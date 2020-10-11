import React from "react";

function Input({ onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Location" onChange={onChange} />
      <input type="submit" value="Get Weather" className="btn btn-primary" />
    </form>
  );
}

export default Input;
