import "./App.css";
import Home from "./Home";
import Meditate from "./Meditate";
import Tips from "./Tips";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="pb-10">
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left fixed sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full z-20 ">
          <div className="mb-2 sm:mb-0">
            <a
              href="/home"
              className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
            >
              <a href="#home">
                <img
                  src="https://fontmeme.com/permalink/211029/e4a1e058a6d50a44d4b1e3044d723c98.png"
                  alt="hardly-worth-it-font"
                  className="w-36"
                  border="0"
                />
              </a>
            </a>
          </div>
          <div>
            <a
              href="/one"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/login.svg"}
                className="w-8 inline"
                alt="login"
              />
            </a>
            <a
              href="/three"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/profile.svg"}
                className="inline w-8"
                alt="profile"
              />
            </a>
          </div>
        </nav>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/meditate" component={Meditate} />
        <Route path="/tips" component={Tips} />
      </div>
    </Router>
  );
}

export default App;
