import "./App.css";
import { SearchForm } from "./components";

function App() {
  return (
    <div className="App">
      <SearchForm />
      <footer>
        <p>Created By Muhammed Ismael & Reece</p>
        <p className="footerContainer">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Ismael76"
          >
            <i class="fa fa-github-square github icons" id="github"></i>
            <p>Ismael</p>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/reececilon"
          >
            <i class="fa fa-github-square github icons" id="github"></i>
            <p>Reece</p>
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
