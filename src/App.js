import "./App.css";
import Home from "./Home";
import Meditate from "./Meditate";
import Tips from "./Tips";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/meditate" component={Meditate} />
        <Route path="/tips" component={Tips} />
      </div>
    </Router>
  );
}

export default App;
