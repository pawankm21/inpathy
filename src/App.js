import "./App.css";
import Home from "./Home";
import Meditate from "./Meditate";
import Tips from "./Tips";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="pb-10">
      <Navbar />
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/meditate" component={Meditate} />
        <Route path="/tips" component={Tips} />
      </div>
    </Router>
  );
}

export default App;
