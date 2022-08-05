import React, { useState } from "react";
import ReactPaginate from "react-paginate";

export default function RenderList({ repoData }) {
  console.log(repoData);
  const [pageNumber, setPageNumber] = useState(0);

  const reposPerPage = 8;
  const pagesVisited = pageNumber * reposPerPage;

  const displayRepos = repoData.data
    .slice(pagesVisited, pagesVisited + reposPerPage)
    .map((repo) => {
      return (
        <div class="card" loading="lazy">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h2>{repo.name}</h2>
          <div class="descriptions">
            {/* <h2>{repo.name}</h2> */}
            {repo.description ? <p>{repo.description}</p> : null}

            <p>Issues Count: {repo.open_issues_count}</p>
            <p>Stargazes Count: {repo.stargazers_count}</p>
            <p>Forks Count: {repo.forks_count}</p>
            <p>Watchers Count: {repo.watchers_count}</p>
            <a href={repo.clone_url}>
              <button>VIEW REPO</button>
            </a>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(repoData.data.length / reposPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="repoList">
        {repoData.username ? (
          displayRepos
        ) : (
          <h3 id="errorMsg">Search For A GitHub Username!</h3>
        )}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        activeLinkClassName={"activeBtn"}
      />
    </div>
  );
}
