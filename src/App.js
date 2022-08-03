import logo from "./logo.svg";
import "./App.css";
import { SearchForm, RepoContainer } from "./components";
import getRepos from "./actions";

function App() {
  let data;

  async function getRepoData() {
    data = await getRepos("ismael76");
    console.log(data);
    return data;
  }

  getRepoData();

  // console.log(data);

  return (
    <div className="App">
      <SearchForm />

      <RepoContainer />
    </div>
  );
}

export default App;
