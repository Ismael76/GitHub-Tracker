import React, { useState } from "react";
import { RenderList } from "../../components";
import axios from "axios";
import ReactPaginate from "react-paginate";

export default function SearchForm() {
  const [userData, setUserData] = useState({ username: "", data: [] });

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
      <form className="form" onSubmit={submitName} id="apple">
        <label htmlFor="username">USERNAME</label>
        <input id="username" type="text"></input>
        <button type="submit">
          Submit
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </form>
      <RenderList repoData={userData} />
    </div>
  );
}
