//eslint-disable
import "./App.css";
import Home from "./Home";
import Meditate from "./Meditate";
import Tips from "./Tips";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import { StressProvider } from "./StressContext";

const POSTS = [
  {
    id: 1,
    title: "Meditation",
    stress:"mild",
    message: "",
    image: "https://i.imgur.com/qkKy8yH.jpg",
  }
]
const EXPERTS = [
  {
    img: "https://i.imgur.com/qkKy8yH.jpg",
    name: "Meditation",
    des: "",
  }
]


function App() {
  return (
    <StressProvider>
    <Router>
      <div className="App">
        <div className="pb-10">
          <Navbar />
        </div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/meditate" component={Meditate} />
        <Route path="/tips" component={Tips} />
        <Route exact path="/register" component={Register} />
      </div>
    </Router>
    </StressProvider>
  );
}

export default App;
