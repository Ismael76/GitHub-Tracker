import React, { useState } from "react";

export default function SearchForm() {
  const [username, setUsername] = useState("");

  const submitName = (e) => {
    setUsername(e.target[0].value);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={submitName}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
