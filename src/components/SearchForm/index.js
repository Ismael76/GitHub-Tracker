import React, { useState } from "react";
import { RenderList } from "../../components";
import axios from "axios";

export default function SearchForm() {
  const [userData, setUserData] = useState({ username: "", data: null });

  const submitName = async (e) => {
    e.preventDefault();
    try {
      let username = e.target[0].value;
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      setUserData((previous) => {
        return { username: username, data: response.data };
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={submitName}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <input type="submit"></input>
      </form>
      <RenderList repoData={userData.data} />
    </div>
  );
}
