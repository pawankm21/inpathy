import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Meditate from "./Meditate";
import Tips from "./Tips";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
function App() {
  const [imgUrl, setImgUrl] = useState("/images/campfire_vector.jpg");
  return (
    <Router>
      <div className="App">
        <div className="pb-10">
      <Navbar 
        imgUrl={imgUrl}
        setImgUrl={setImgUrl}
      />
        </div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/meditate" component={Meditate} />
        <Route path="/tips" component={Tips} />
        <Route exact path ="/register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
