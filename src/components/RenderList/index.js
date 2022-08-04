import React, { useState } from "react";

export default function RenderList({ repoData }) {
  console.log(repoData);
  // console.log(repoData.username);
  return (
    <div>
      <div className="repoList">
        {repoData.username ? (
          repoData.data.map((repo, index) => (
            <div class="card" loading="lazy">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <h2>{repo.name}</h2>
              <div class="descriptions">
                {/* <h2>{repo.name}</h2> */}
                {repo.description ? (
                  <p>{repo.description}</p>
                ) : null}

                <p>Issues Count: {repo.open_issues_count}</p>
                <p>Stargazes Count: {repo.stargazers_count}</p>
                <p>Forks Count: {repo.forks_count}</p>
                <p>Watchers Count: {repo.watchers_count}</p>
                <a href={repo.clone_url}>
                  <button>VIEW REPO</button>
                </a>
              </div>
            </div>
          ))
        ) : (
          <h3 id="errorMsg">Search For A GitHub Username!</h3>
        )}
      </div>
    </div>
  );
}
